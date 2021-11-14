import { getDownloadURL, uploadBytes, ref } from '@firebase/storage';
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import API from '../../../API/API';
import SecurePage from '../../../Components/Page/SecurePage';
import { storage } from '../../../Firebase';
import useAds from '../../../Hooks/useAds';
import { Ad, AdsObject } from '../../../Types';
import { Input } from '../../Login/Login.styles';
import * as Styles from './Ads.styles';
import { v4 as uuid } from 'uuid';

interface AdRowProps {
    id: string;
    ad: Ad;
    ads: AdsObject;
    setAds: Dispatch<SetStateAction<AdsObject>>;
}

const AdRow: FC<AdRowProps> = ({ id, ad, ads, setAds }) => {
    // Modal
    const [open, setOpen] = useState(false);

    // Image reference
    const imageRef = ref(storage, ad.image);
    const [imageURL, setImageURL] = useState<string>();

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            try {
                await uploadBytes(ref(storage, acceptedFiles[0].name), acceptedFiles[0]);
                toast.success('Image uploaded');
                const _ads = { ...ads };
                _ads[id].image = acceptedFiles[0].name;
                setAds(_ads);
            } catch (error) {
                toast.error('Could not upload file');
            }
        },
        [ads, id, setAds]
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: 'image/jpeg, image/png',
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await API.rewards.delete(id);
        const _ads = { ...ads };
        delete _ads[id];
        setAds(_ads);
        toast.success('Ad deleted');
        handleClose();
    };

    const handleLink = (link: string) => {
        const _ads = { ...ads };
        _ads[id].link = link;
        setAds(_ads);
    };

    const handleActive = () => {
        const _ads = { ...ads };
        _ads[id].active = !_ads[id].active;
        setAds(_ads);
    };

    useEffect(() => {
        (async () => {
            const _imageURL = await getDownloadURL(imageRef);
            setImageURL(_imageURL);
        })();
    }, [imageRef]);

    return (
        <TableRow>
            <TableCell width='30%'>
                <Styles.ImageContainer>
                    {imageURL ? <Styles.Image src={imageURL} /> : <Styles.ImagePlaceholder />}
                    <Styles.DropContainer {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </Styles.DropContainer>
                </Styles.ImageContainer>
            </TableCell>
            <TableCell>
                <Input fullWidth onChange={(e) => handleLink(e.target.value)} value={ad.link} />
            </TableCell>
            <TableCell align='center'>
                <Checkbox checked={ad.active} onChange={handleActive} />
            </TableCell>
            <TableCell align='center'>
                <IconButton onClick={handleOpen}>
                    <FiTrash2 />
                </IconButton>
            </TableCell>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id='alert-dialog-title'>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Do you really want to delete this advertisment? This action cannot be
                        undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </TableRow>
    );
};

const Ads: FC = () => {
    const { ads, setAds } = useAds();

    const handleNew = () => {
        setAds({ [uuid()]: { active: true, link: '', image: undefined }, ...ads });
    };

    const handleSave = async () => {
        try {
            const saveRequest = Object.entries(ads).map(([id, ad]) => API.rewards.set(id, ad));
            await Promise.all(saveRequest);
            toast.success('Changes saved');
        } catch (error) {
            toast.error('Could not save changes');
        }
    };

    return (
        <SecurePage title='Ads'>
            <Styles.Container>
                <h1>Advertisments</h1>
                <Styles.ButtonGroup>
                    <Styles.Button onClick={handleNew}>New</Styles.Button>
                    <Styles.Button onClick={handleSave}>Save</Styles.Button>
                </Styles.ButtonGroup>
                <Styles.TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Link</TableCell>
                                <TableCell align='center'>Active</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.entries(ads).map(([id, ad]) => (
                                <AdRow key={id} id={id} ad={ad} ads={ads} setAds={setAds} />
                            ))}
                        </TableBody>
                    </Table>
                </Styles.TableContainer>
            </Styles.Container>
        </SecurePage>
    );
};

export default Ads;

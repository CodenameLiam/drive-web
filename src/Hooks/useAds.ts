import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API from '../API/API';
import { AdsObject } from '../Types';

interface UseAds {
    ads: AdsObject;
    setAds: Dispatch<SetStateAction<AdsObject>>;
}

const useAds = (): UseAds => {
    const [ads, setAds] = useState<AdsObject>({});
    useEffect(() => {
        (async () => {
            try {
                const _ads = await API.rewards.get();
                setAds(_ads);
            } catch (error) {
                toast.error('Could not fetch ads');
            }
        })();
    }, []);

    return { ads, setAds };
};

export default useAds;

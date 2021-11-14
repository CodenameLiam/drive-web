import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { Ad, AdsObject } from '../Types';

const rewardsRef = collection(db, 'rewards');

const rewards = {
    get: async () => {
        const docsRef = await getDocs(rewardsRef);
        const _rewards: AdsObject = docsRef.docs.reduce(
            (object, reward) => Object.assign(object, { [reward.id]: reward.data() }),
            {}
        );
        return _rewards;
    },
    set: async (id: string, ad: Ad) => {
        const rewardRef = doc(db, 'rewards', id);
        setDoc(rewardRef, ad);
    },
    delete: async (id: string) => {
        deleteDoc(doc(db, 'rewards', id));
    },
};

const API = {
    rewards,
};

export default API;

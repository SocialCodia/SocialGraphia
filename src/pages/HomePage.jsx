import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import Category from "../components/rows/Category/Category";
import CategoryParent from "../components/rows/Category/CategoryParent";
import Festival from "../components/rows/Festival";
import { getHomePage } from "../http";
import { setData } from "../store/mainSlice";
import Loading from '../components/Loading';

const HomePage = () =>  
{
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        (async()=>{
            const res = await getHomePage({});
            dispatch(setData(res.data));
            setLoading(false);
        })();
    },[])

    return (
        loading? <Loading/> :
        <>
            <div className='cusContainer'>
            <Festival/>
            <CategoryParent/>
            </div>
        </>
        )
}

export default HomePage;
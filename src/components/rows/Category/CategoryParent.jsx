import { useSelector } from "react-redux";
import Category from "./Category";



const CategoryParent = () =>
{

    const {new_category} = useSelector((state)=>state.mainSlice);
    return new_category ?(
        <>
            {
                new_category.map((data,index)=>{
                    return <Category key={index} data={data}/>
                })
            }
        </>
    )
    : 'Empty'
}

export default CategoryParent;
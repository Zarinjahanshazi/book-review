import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const saveDataToLocalStorageRead =(book) =>{
    const saveData = JSON.parse(localStorage.getItem("books")) || [];
    const exist = saveData.find((item) => item.id == book.id);
    if(exist){
        alert("exist")    
    }
    else{
        saveData.push(book);
        localStorage.setItem("books",JSON.stringify(saveData));
        alert("Book added ");
    }
};
export const getDataFromLocalRead =() =>{
    const getDefaultData = JSON.parse(localStorage.getItem("books")) || [];
    return getDefaultData;
};

//wishList

export const saveDataToLocalStorageWishList = (book) => {
    const saveDataWishList = JSON.parse(localStorage.getItem("wishBooks")) || [];
    const existWish = saveDataWishList.find((item) => item.id == book.id);

    const readList = JSON.parse(localStorage.getItem("books")) || [];
    const read = readList.find((item) => item.id == book.id);
    if(read) {
        alert("Already In read");
    }
    else{
        if (existWish) {
            alert("Already in the WishList");
        } else {
            saveDataWishList.push(book);
            localStorage.setItem("wishBooks", JSON.stringify(saveDataWishList));
            alert("Added to WishList");
        }
    }
};

export const getDataFromLocalWishList = () => {
    const getDefaultDataWishList = JSON.parse(localStorage.getItem("wishBooks")) || [];
    return getDefaultDataWishList;
};
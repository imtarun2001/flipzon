import { createContext, useState } from "react";
import { filterData,apiUrl } from "../Data";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const AppContext = createContext();

export default function AppContextProvider({children}) {    
    
    
    
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState(null);
    async function fetchProducts() {
        setLoading(true);
        
        try {
            let response = await fetch(apiUrl);
            let output = await response.json();
            setProducts(output);
        }
        catch(error) {
            console.error("Error while fetching API");
        }
        
        setLoading(false);
    }
    
    
    
    
    
    
    
    
    
    
    
    const [category,setCategory] = useState(filterData[0]);
    function filterHandler(category) {
        setCategory(category);
    }
    
    
    
    
    
    
    
    
    
    function getProducts() {
        if(category==='All') {
            let allProducts = [];
            products.forEach((product) => {
                allProducts.push(product);
            })
            return allProducts;
        }
        
        else {
            let categorisedProducts = [];
            products.forEach((product) => {
                if(product.category===category) {
                    categorisedProducts.push(product);
                }
            })
            return categorisedProducts;
        }
    }
    

    

    
    
    
    const [price,setPrice] = useState(0);
    const [cartProducts,setCartProducts] = useState([]);
    function addToCartHandler(product) {
        const isProductInCart = cartProducts.find((p) => p.id===product.id);
        if(isProductInCart) {
                setCartProducts(cartProducts.filter((prev)=>prev.id!==product.id));
                setPrice((prev) => prev-product.price);
                // console.log("Product removed from cart");
                toast.success("Product removed from cart");
        }
        else {
                setCartProducts((prev) => [...prev,product])
                setPrice((prev) => prev+product.price);
                // console.log("Product added to cart");
                toast.success("Product added to cart");
        }

    }

    function removeFromCartHandler(product) {
        const newCartProducts = cartProducts.filter((p) => p.id!==product.id);
        setCartProducts(newCartProducts);
        setPrice((prev) => prev-product.price);
    }







    const [wishListTotalPrice,setWishListTotalPrice] = useState(0);
    const [wishListProducts,setWishListProducts] = useState([]);

    function addToWishListHandler(product) {
        const isProductInWishList = wishListProducts.find((p) => p.id === product.id);
      
        if (isProductInWishList) {
          const updatedList = wishListProducts.filter((p) => p.id !== product.id);
          setWishListProducts(updatedList);
          setWishListTotalPrice((prev) => prev - product.price);
          toast.success("Product removed from wishlist");
        } else {
          const updatedList = [...wishListProducts, product];
          setWishListProducts(updatedList);
          const newTotal = updatedList.reduce((acc, curr) => acc + curr.price, 0);
          setWishListTotalPrice(newTotal);
          toast.success("Product added to wishlist");
        }
      }
    
    function removeFromWishListHandler(product) {
        const newWishListProducts = wishListProducts.filter((p) => p.id!==product.id);
        setWishListProducts(newWishListProducts);
        setWishListTotalPrice((prev) => prev - product.price);
    }
    
    
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    function gotoCart() {
        if(isLoggedIn) {
            navigate('/cart');
            // console.log("You're in cart");
            toast.success("You're in cart");
        }
        else {
            navigate('/login');
            // console.log("Login first");
            toast.error("Login first");
        }
    }




    function gotoWishList() {
        if(isLoggedIn) {
            navigate('/wishlist');
            // console.log("You're in wishlist");
            toast.success("You're in wishlist")
        }
        else {
            navigate('/login');
            // console.log("Login first");
            toast.error("Login first");
        }
    }

    function gotoDashboard() {
        navigate('/');
    }

    function gotoDashboardNLogOut() {
        navigate('/');
        setIsLoggedIn(false);
        toast.success("Logged out");
    }

    function gotoLogIn() {
        navigate('/login');
        // console.log("You are in Log in page");
        toast.success("You are in Log in page");
    }

    function gotoSignUp() {
        if(isLoggedIn) {
            toast.error("Log out first");
        }
        else {
            navigate('/signup');
        }
    }
    
    const [logInFormData,setLogInFormData] = useState({
        email : "",
        password : ""
    });
    function changeHandler(event) {
        setLogInFormData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        if(logInFormData.email && logInFormData.password) {
            navigate('/');
            setIsLoggedIn(true);
            console.log("Logged in successfully");
            toast.success("Logged in successfully🎉");
            let username = logInFormData.email.indexOf('@');
            console.log("Welcome "+logInFormData.email.substring(0,username));
            toast.success("Welcome "+logInFormData.email.substring(0,username));
        }
        else {
            console.log("A field can't be empty");
            toast.error("A field can't be empty");
        }
    }
    






    const [signUpFormData,setSignUpFormData] = useState({
        semail : "",
        spassword : "",
        scpassword : ""
    });
    function signUpChangeHandler(event) {
        setSignUpFormData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    function signupSubmitHandler(event) {
        event.preventDefault();
        if(signUpFormData.semail && signUpFormData.spassword && signUpFormData.scpassword) {
            if(signUpFormData.spassword===signUpFormData.scpassword) {
                navigate('/login');
                console.log("Account created");
                toast.success("Account created🎉");
                let username = signUpFormData.semail.indexOf('@');
                console.log("Congrats "+signUpFormData.semail.substring(0,username)+"🥳");

            }
            else {
                console.log("Password mismatched");
                toast.error("Password mismatched");
            }
        }
        else {
            console.log("A field can't be empty");
            toast.error("A field can't be empty");
        }
    }




    const [dark,setDark] = useState(true);
    function themeHandler() {
      setDark(!dark);
      dark ? toast.success("Ligth theme activated") : toast.success("Dark theme activated")
    }




    const [quantity,setQuantity] = useState(1);
    function quantityHandler(quantity) {
        if(quantity>1) {
            if(quantity>5) {
                setQuantity(5);
                toast.error("You can't buy more than 5 product once");
            }
            else {
                setQuantity(quantity);
            }
        }
        else {
            setQuantity(1);
        }
    }



    
    const datas = {loading,setLoading,products,setProducts,fetchProducts,category,setCategory,filterData,filterHandler,getProducts,cartProducts,setCartProducts,addToCartHandler,removeFromCartHandler,wishListProducts,setWishListProducts,addToWishListHandler,removeFromWishListHandler,isLoggedIn,setIsLoggedIn,gotoCart,gotoWishList,gotoDashboard,gotoDashboardNLogOut,gotoLogIn,gotoSignUp,logInFormData,setLogInFormData,changeHandler,submitHandler,signUpFormData,setSignUpFormData,signUpChangeHandler,signupSubmitHandler,dark,setDark,themeHandler,price,setPrice,wishListTotalPrice,setWishListTotalPrice,quantity,setQuantity,quantityHandler};
    
    return <AppContext.Provider value={datas}>
        {children}
    </AppContext.Provider>
}
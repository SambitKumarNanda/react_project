import React,{useState,useEffect} from "react";
import Navigation from "./Navigation";
import styles from "./buttonconfig.module.css"


function HomePage() {

    const [ number,setNumber] = useState(0);
     
    //ComponentDidMount
    useEffect(() =>  {
        console.log("Component Mounted")
    },[]
    );

    //ComponentDidUpdate
    useEffect(() =>  {
        console.log("Number Did Update")
    }
    );

    return (
        <>
         <Navigation />
         <h1 style={{textAlign:"center" }}>{number}</h1>
         <div className={styles.buttontoolbar}>
             <div className={styles.buttons}>
                 <h2> Addition </h2>
                    <button onClick={() => setNumber((prev) => prev+1)}>Click me to add 1</button>
                 <h2> Subtraction </h2>
                    <button onClick={() => setNumber((prev) => prev-1)}>Click me to sutract 1</button>
                 <h2>Multiplication</h2>
                    <button onClick={() => setNumber((prev) => prev*1)}>Click me to multiply 1</button>
                    <button onClick={() => setNumber((prev) => prev*2)}>Click me to multiply 2</button>
                    <button onClick={() => setNumber((prev) => prev*3)}>Click me to multiply 3</button>
                    <button onClick={() => setNumber((prev) => prev*4)}>Click me to multiply 4</button>
                    <button onClick={() => setNumber((prev) => prev*5)}>Click me to multiply 5</button>
                    <button onClick={() => setNumber((prev) => prev*6)}>Click me to multiply 6</button>
                    <button onClick={() => setNumber((prev) => prev*7)}>Click me to multiply 7</button>
                    <button onClick={() => setNumber((prev) => prev*8)}>Click me to multiply 8</button>
                    <button onClick={() => setNumber((prev) => prev*9)}>Click me to multiply 9</button>
                 <h2>Division</h2>
                    <button onClick={() => setNumber((prev) => prev/1)}>Click me to divide 1</button>
                    <button onClick={() => setNumber((prev) => prev/2)}>Click me to divide 2</button>
                    <button onClick={() => setNumber((prev) => prev/3)}>Click me to divide 3</button>
                    <button onClick={() => setNumber((prev) => prev/4)}>Click me to divide 4</button>
                    <button onClick={() => setNumber((prev) => prev/5)}>Click me to divide 5</button>
                    <button onClick={() => setNumber((prev) => prev/6)}>Click me to divide 6</button>
                    <button onClick={() => setNumber((prev) => prev/7)}>Click me to divide 7</button>
                    <button onClick={() => setNumber((prev) => prev/8)}>Click me to divide 8</button>
                    <button onClick={() => setNumber((prev) => prev/9)}>Click me to divide 9</button>
             </div>
         </div>    
        </>
    );
}

export default HomePage;
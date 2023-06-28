import React,{useState} from "react"


const Tabs=(props)=>{
    let [curr,setCurr] = useState("");
    function fun(){
        setCurr(props.content1);
    }
    function fun2(){
        setCurr(props.content2);
    }
    function fun3(){
        setCurr(props.content3);
    }
    return(
        <div>
            
                <li onClick={fun}> {props.title1}</li>
                <li onClick={fun2}> {props.title2}</li>
                <li onClick={fun3}> {props.title3}</li>
           
            <p>
                {curr}
            </p>
        </div>
    )
}

export default Tabs;
import './Fallback.css'

export const Fallback = () => {

    const refreshPage = ()=>{
        window.location.reload();
     }

    return (
        <div className="errorBoundary">
                <img src="./images/errorBoundary.png" alt="" onClick={refreshPage}/>
        </div>
    )
    
}
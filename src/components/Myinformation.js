import './myinfo.css';
import'./myinfo.css'
function Myinformation(props)
{
    return(
<div>
    <div id="my_info">
    <ol>
        <li>Name:{props.name}</li>
        <li>Age:{props.age}</li>
        <li>Mobile no:{props.mobileno}</li> 
        </ol>
        </div>
    </div>
    );
}
export default Myinformation;
import { useState } from "react";

function StateChange() {
    const [data, setData] = useState([
        {id: 1,n:0, name: "Ali"},
        {id: 2,n:0, name: "Ahmad"}
    ]);

    const updateData = (index)=> {
        let dataClone = [...data];
        dataClone[index].n= dataClone[index].n+1;
        setData(dataClone);
    }
    return ( 
        <div>
            
            {
                data.map((d, index) => (
                    <div key={d.id}>
                      <h1>{d.id}</h1>
                      <h2>{d.name}</h2>
                      <h3>No : {d.n}</h3>
                      <button onClick={() => updateData(index,d.id)}>Update</button>
                    </div>
                ))
            }

        </div>
     );
}

export default StateChange;
import { useState } from "react";

export default function MCQ({question, choices, correctChoiceIndex, onSelect}) {
    const [selected, setSelected] = useState(null);
    function handleClick(index) {
        if (selected == null) {
            setSelected(index);
            onSelect(correctChoiceIndex == index);
        }
    }
    return <>
        <div style={{width: '100%', borderRadius: '10px', backgroundColor: '#eee', display: 'flex', flexDirection: 'column', marginTop: '10px', marginBottom: '10px'}}>
            <div style={{margin: '10px'}}>
                <h2 style={{textAlign: 'left', marginLeft: '10px'}}>{question}</h2>
                <div style={{margin: '10px'}}>
                    {choices.map((choice, index) => {
                        return <div onClick={() => handleClick(index)} style={{fontSize: '1.5rem', textAlign: 'left', width: '100%', backgroundColor: selected==index?'#4448':'transparent', color: selected==index?'white':'black', border: '1px solid #0008', borderRadius: '10px', marginBottom: '10px'}} key={`q-${index}`}>
                            <p style={{margin: '10px', marginLeft: '20px'}}>{choice}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}
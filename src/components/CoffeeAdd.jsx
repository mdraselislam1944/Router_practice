import React from 'react';

const CoffeeAdd = () => {
    const handleAddCoffee=(event)=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);
        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.InsertedId){
                alert('insert item successfully');
            }
        });
    }

    return (
        <div className='text-center my-20'>
            <h1>add New coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className='flex  justify-center items-center'>
                    <div className='mx-6 my-5'>
                        <input type="text" name='name' placeholder="Enter Coffee Name" className=" input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name='quantity' placeholder="Enter COffee Chef" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex  justify-center items-center'>
                    <div className='mx-6 my-5'>
                        <input type="text" name='supplier' placeholder="Enter Coffee Supply" className=" input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name='taste' placeholder="Enter Coffee Test" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex  justify-center items-center'>
                    <div className='mx-6 my-5'>
                        <input type="text" name='category' placeholder="Enter Coffee Category" className=" input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name='details' placeholder="Details" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>
                <div className=' px-20 my-5 text-center'>
                    <input type="text" name='photo' placeholder="Photo" className="w-full input input-bordered input-info max-w-xs" />
                </div>
                <div className='w-full px-16 text-center'>
                <button className="btn btn-wide">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default CoffeeAdd;
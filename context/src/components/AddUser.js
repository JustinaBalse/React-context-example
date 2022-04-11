import React, { useState } from 'react'

export default function AddUser() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        alert("valio");
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <form onSubmit={e => { handleSubmit(e) }}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

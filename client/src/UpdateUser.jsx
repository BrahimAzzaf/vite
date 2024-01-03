import React from 'react'


function UpdateUser() {
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Update User</h2>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Age</label>
                        <input type='text' className='form-control' />
                    </div>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
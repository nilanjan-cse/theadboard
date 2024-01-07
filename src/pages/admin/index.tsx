import React, { useState } from 'react'
import { Header } from '../../ReactStyles/AppStyles'
import addData from '@/firebase/firestore/addData';
import Alert from '@/components/Alert';


let title: string = "";
let imageUrl: string = "";
let content: string = "";

function Admin() {
    const [isSuccess, setSuccess] = React.useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const handleForm = (e: any) => {
        e.preventDefault();
        const dbData = {
            imageSrc: imageUrl,
            title: title,
            content: `${content}`
        }
        addData('posts', title, dbData);
        setSuccess(true);
        setTitle("");
        setImageUrl("");
        setContent("");
    }


    function handleClose(isClose:boolean){
        setSuccess(isClose);
    }

    return (
        <div className="container">
            <div style={Header}>
                <h1 className="display-2">The AdBoard</h1>
            </div>
            <h1 className='lead'>Create an advertisement post</h1>
            {isSuccess&&
                <Alert message={"Advertisement saved successfully"} handleClose={handleClose} />
            }
            <form>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" value={title} className="form-control" id="title" onChange={(e:any)=>setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="ImageUrl" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                        <input type="text" value={imageUrl} className="form-control" id="ImageUrl" onChange={(e:any)=>setImageUrl(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
                    <div className="col-sm-10">
                        <textarea value={content} className="form-control" aria-label="With textarea" onChange={(e:any)=>setContent(e.target.value)}></textarea>
                    </div>
                </div>

                <button onClick={handleForm} type="submit" className="btn btn-primary btn-lg"><i className="fa fa-save"></i> Save</button>
            </form>
        </div>
    )
}

export default Admin
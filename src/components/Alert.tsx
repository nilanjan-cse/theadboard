import React from 'react'
export interface IAlert {
    message: string,
    handleClose: Function;
}
function Alert(props: IAlert) {
    const { message, handleClose } = props;
    return (
        <div className="alert alert-success alert-dismissible">
            <a href="#" className="close" data-dismiss="alert" aria-label="close" onClick={() => handleClose(false)}><i className="fa fa-close" style={{ fontSize: "18px" }}></i></a>
            <i className="fa fa-check-circle"></i> {message}
        </div>
    )
}

export default Alert
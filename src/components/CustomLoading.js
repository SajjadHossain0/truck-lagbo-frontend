import React from 'react';
import ReactLoading from 'react-loading';

export default function CustomLoading() {
    return (
        <div align="center">
            <ReactLoading type={"bars"} color={"gray"} height={50} width={50} />
        </div>
    )
}
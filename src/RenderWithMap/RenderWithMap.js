import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'iphoneA', price: 1000, img: 'https' },
        { id: 2, name: 'iphoneB', price: 2000, img: 'https' },
        { id: 3, name: 'iphoneC', price: 3000, img: 'https' },
    ]

    renderProduct = () => {
        // let arrayTagProduct = [];
        // for (let item of this.arrProduct) {
        //     let obTrJSX =
        //         <tr>
        //             <td>{item.id}</td>
        //             <td>{item.name}</td>
        //             <td>{item.price}</td>
        //             <td><img scr={item.img} width={50} alt="..." /></td>
        //         </tr>
        //     arrayTagProduct.push(obTrJSX)
        // }
        // return arrayTagProduct

        let newArrProduct = this.arrProduct.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><img scr={product.img} width={50} alt="..." /></td>
                </tr >
            )
        })
        return newArrProduct
    }

    render() {
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}

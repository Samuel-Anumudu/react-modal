import "./popup.css"
export const ProductPopup = (props) => {
    const closeModal = () => {
        props.onCloseModal();
    }
    return (
        <div className="product-popup">
            <div className="product-overlay">
                <div className="product-modal">


                    <div className="col_1">

                    </div>
                    <div className="col_2">
                        <h1 className="text-red">This is our product popup Abe Jawin</h1>
                        <button onClick={(e) => { closeModal() }}>Close</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

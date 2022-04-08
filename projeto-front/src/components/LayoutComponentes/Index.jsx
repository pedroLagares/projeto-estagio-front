export const LayoutComponents = (props) => {
    return (
        <div className='fullpage'>
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    );
};
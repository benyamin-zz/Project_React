import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div id="notfound " className="text-center">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>شرمنده همچین صفحه ایی نداریم</h2>

                    <Link to="/">
                        <span class="arrow" />
                        برگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;

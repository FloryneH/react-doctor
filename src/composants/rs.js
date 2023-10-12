import React from "react";

function Rs({propsRs}) {
    return (
        <ul class="list-inline mt-4 doctor-social-links">
            {propsRs.map((item, index) => {
                return (
                    <li class="list-inline-item"><a href="#"><i class={item}></i></a></li>
                )
            })}
        </ul>
    );
}

export default Rs;
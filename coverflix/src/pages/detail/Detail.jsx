import { useEffect, useState } from "react";
import { FooterComponent } from "../../components/footer/FooterComponent"
import { getList } from "../../api/api";

function Detail(){
    return (
        <div>
            <h1>Título do filme</h1>
            <div>
                <img/>
                <div>
                    <p>Título:</p>
                    <p>Sinopse:</p>
                    <p>Data de lançamento:</p>
                    <p>Nota:</p>
                </div>
            </div>
            
            <FooterComponent/>
        </div>
    )
}

export default Detail;
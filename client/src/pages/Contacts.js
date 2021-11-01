import React from "react";
import backGround from '../img/slider8.jpg'

export const Contacts = () => {
   return(
            <div class="main-content-section" style={{'backgroundImage':`url(${backGround})`, 'background-size':'cover', 'padding':'80px 40px 40px 40px'}}>
                {/* <!-- Contacts section --> */}
                <div class="my-contacts-section">
                    <h2 class="my-contacts-type">Phones:</h2>
                    <a class="my-contacts-content" href='tel:+380936626661'>+380936626661</a>
                        <p class="my-contacts-description">
                        Viber, WhatsApp, Telegram
                        </p>
                    <a class="my-contacts-content" href='tel:+380688254123' >+380688254123</a>
                    <h2 class="my-contacts-type">Email:</h2>
                    <a class="my-contacts-content" href='mailto:mvorontsov713@gmail.com'>mvorontsov713@gmail.com</a>
                    <h2 class="my-contacts-type">LinkedIn:</h2>
                    <a class="my-contacts-content" href='https://www.linkedin.com/in/michael-vorontsov-57b7ba198/'>linkedin.com/in/michael-vorontsov-57b7ba198</a>
                </div>
            </div>
  )
}
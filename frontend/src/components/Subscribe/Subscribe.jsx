import React, { useState } from 'react';
import MessageModal from '../Modals/MessageModal';

const Subscribe = () => {
    const [modalMessage, setModalMessage] = useState('');
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const response = await fetch('/subscribe', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.access === 'Granted') {
                setModalMessage(data.message);
                setShowMessageModal(true);
                setRefresh(true);

            } else {
                setModalMessage(data.access === 'Denied' ? data.message : data.error);
                setShowMessageModal(true);
            }

        } catch (error) {
            console.error('Error:', error);
            setModalMessage('An error occurred while processing your request.');
            setShowMessageModal(true);
        }
    };

    const handleModalOkClick = () => {
        setShowMessageModal(false);
        if (refresh) {
          window.location.reload();
        }
      };


    return (
        <div>
            <div className="p-6 container_subscribe md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                    <form action="subscribe" method="post" id="subscribe" onSubmit={handleSubscribe}>
                        <div className="flex items-stretch mt-12">
                            <input name="email" className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                            <button type="submit" className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <MessageModal
                show={showMessageModal}
                onClose={() => handleModalOkClick()}
                message={modalMessage}
            />
        </div>
    )
}

export default Subscribe

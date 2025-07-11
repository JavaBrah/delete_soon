import Header from "../components/Header";

export default function Home() {
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <img  className="w-full max-w-4xl rounded-lg shadow-lg" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&quality=85&auto=format&fit=max&s=7543c611e54f684ba5da8700c2ac15d9" alt="" />
            <article className="text-center flex">
                Welcome to the a demo site utilizing the Rick & Morty API. <br/>
                I hope it is a milding pleasant experience navigating through
                the characters, locations, and episodes. <br/>
                <strong>Thank Ya!</strong>
            </article>
        </div>
        </>
    );
};

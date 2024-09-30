import profile from "../../assets/images/profile.png";
const Header = () => {
    return (
        <header className="container px-2 flex justify-between py-4 border-b-2 items-center m-auto">
            <div>
                <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;

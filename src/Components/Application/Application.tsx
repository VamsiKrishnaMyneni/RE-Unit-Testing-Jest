

const Application = () => {


    return <>
        <div>Application Component</div>
        <h1>Application Form</h1>
        <h1>Application Form2</h1>
        <img src="https://via.placeholder.com/150" alt="placeholder_image" />
        <span title="Testing library practice">Testing library practice</span>
        <div data-testid="custom-element">Custom Element</div>

        <form action="/submit" method="post">

            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" value="Vamsi Krishna" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
            <select name="jobrole">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </>
};

export default Application;
type user = {
    name: string;
    surname: string;
    age: number;
    male: string;
};
export const User: React.FC<user> = (props) => (
    <div className="user">
        <h1>USER</h1>
        <p>{`Name: ${props.name}`}</p>
        <p>{`Surname: ${props.surname}`}</p>
        <p>{`Age: ${props.age}`}</p>
        <p>{`Male: ${props.male}`}</p>
    </div>
);

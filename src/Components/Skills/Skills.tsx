

export default function Skills({ skills }: { skills: string[] }) {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}

            </ul>
        </div>
    )
}
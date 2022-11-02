import './Table.css'

export default function Table ({data, page}) {
    const renderHeader = () => {
        let headerElement = ['id', 'name', 'email', 'phone', 'country']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

  const extractName = (name)=>`${name.title} ${name.first} ${name.last}`;
    const renderBody = () => {
        return data && data.map((datum, index) => {
            return (
                <tr key={index}>
                    <td>{((page-1)*10) + index + 1}</td>
                    <td>{extractName(datum.name)}</td>
                    <td>{datum.email}</td>
                    <td>{datum.phone}</td>
                    <td>{datum.location.country}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>React Table</h1>
            <table id='employee' style={{width: '80vw'}}>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}
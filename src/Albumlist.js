import React from 'react';
import './App.css';

class Albumlist extends React.Component {
    TargetUrl = process.env.REACT_APP_TARGET_URL;

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {
            const response = await fetch(this.TargetUrl+'/albums');
            const data = await response.json();
            this.setState({ data });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { data } = this.state;
        if (!data) {
            return <div>Loading...</div>;
        }
        return (
            <div className="App">
                <header className="App-header">
                    <table>
                        <tr><th>ID</th><th>Logo</th><th>Title</th><th>Artist</th></tr>
                        {this.state.data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td><img src={item.image_url} height="30px" alt="Logo of {$item.title}"></img></td>
                                <td>{item.title}</td>
                                <td>{item.artist}</td>
                            </tr>
                        ))}
                    </table>
                    <br />
                    <p>Loaded data from {this.TargetUrl}</p>
                    <a href='/'>Home</a>
                </header>
            </div>
        );
    }
}
export default Albumlist;
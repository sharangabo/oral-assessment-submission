import React from 'react';

interface State {
    celsius: string;
    fahrenheit: string;
}

class TempConverter extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            celsius: '',
            fahrenheit: ''
        };
    }

    handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const celsius = e.target.value;
        if (celsius === '') {
            this.setState({ celsius, fahrenheit: '' });
        } else {
            const fahrenheit = (parseFloat(celsius) * 9 / 5 + 32).toFixed(2);
            this.setState({ celsius, fahrenheit });
        }
    }

    handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fahrenheit = e.target.value;
        if (fahrenheit === '') {
            this.setState({ celsius: '', fahrenheit });
        } else {
            const celsius = ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2);
            this.setState({ celsius, fahrenheit });
        }
    }

    render() {
        const { celsius, fahrenheit } = this.state;

        return (
            <div className="converter">
                <div>
                    <label htmlFor="celsius">Celsius:</label>
                    <input
                        id="celsius"
                        type="number"
                        value={celsius}
                        onChange={this.handleCelsiusChange}
                        placeholder="Enter temperature in Celsius"
                    />
                </div>
                <div>
                    <label htmlFor="fahrenheit">Fahrenheit:</label>
                    <input
                        id="fahrenheit"
                        type="number"
                        value={fahrenheit}
                        onChange={this.handleFahrenheitChange}
                        placeholder="Enter temperature in Fahrenheit"
                    />
                </div>
            </div>
        );
    }
}

export default TempConverter;
import react from "react";

export default class GameMode extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="row">
            <div className="col p-2">
              <select className="form-select p" aria-label="Default select example" defaultValue="0">
                <option value="0">Pick mode</option>
                <option value="1">Easy</option>
                <option value="2">Normal</option>
                <option value="3">Hard</option>
              </select>
              <button type="button" className="btn btn-primary">START</button>
            </div>
          </div>
        )
    }
}
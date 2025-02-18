
import './App.css'

function App() {
 
  return (
    <>
       <div className="container">
        <div className="containerr">
          <div className="heder">
            <h1>Expense Tracker</h1>
          </div>
          <p>YOUR BALANCE</p>
          <h2>$0.00</h2>
          <div className="dollor">
            <div className="btn">
              <h2>INCOME</h2>
              <h2 className="red">$0.00</h2>
            </div>

            <div className="btn">
              <h2>EXPENSE</h2>
              <h2 className="ret">$0.00</h2>
            </div>
          </div>
          <div className="input1">
            <h1>History</h1>
            <input className="input" type="text" placeholder="No transaction" />
          </div>

          <div className="2">
            <h1>Add New Transaction</h1>
            <p>Text</p>
            <input className="input1" type="text" placeholder="enter text" />
            <p>Amount ( +income, -expense)</p>
            <input
              className="input1"
              type="text"
              placeholder="Enter amount..."
            />
          </div>
          <button className="Btn">Add Transaction</button>
        </div>
      </div>
    </>
  )
}

export default App

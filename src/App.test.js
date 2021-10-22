import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Repositories from './Components/Repositories';

describe('App', ()=>{

  test('renders correct navbar title', () => {
    render(<App/>)
    const heading = screen.getByText(/repo tracker/i);
    expect(heading).toBeInTheDocument();
  });
  
  test("check repo tracker title doesnt vanish", () => {
    render(<App/>)
    const nameInput = screen.getByLabelText('input')
    userEvent.type(nameInput, "ria10{enter}")
    const heading = screen.getByText(/repo tracker/i)
    expect(heading).toBeInTheDocument()
  });

  test('renders avatar when search complete',  ()=>{
    render(<App/>)
    const inputElement = screen.getByLabelText("input")
    userEvent.type(inputElement, "ria10{enter}")
    setTimeout(async (done)=>{
      const image =  await screen.findByRole('img')
      expect(image.src).toBeTruthy()
      done()
    }, 5000)
  })

  test('removes avatar after clicking back button',  ()=>{
    render(<App/>)
    const inputElement = screen.getByLabelText("input")
    userEvent.type(inputElement, "ria10{enter}")
    setTimeout(async ()=>{
      const backbutton =  await screen.findAllByRole('button')[2]
      userEvent.click(backbutton)
      setTimeout(()=>{
        const image = screen.findByRole('img')
        expect(image.src).toBeFalsy()
      }, 2000)
    }, 2000)
  })

  // pop up comes up when you enter blank username
  // test('pop up comes when you enter a black username', async ()=>{
  //   render(<App/>)
  //   const inputElement = screen.getByLabelText("input")
  //   userEvent.type(inputElement, "{enter}")
  //   const popUpText = await screen.findByText(/the username cannot be empty./i)
  //   expect(popUpText).toBeInTheDocument()
  // })

  // error message displays when you enter non existent user name
  // test('pop up comes when you enter a blank username', async ()=>{
  //   render(<App/>)
  //   const inputElement = screen.getByLabelText("input")
  //   userEvent.type(inputElement, "irfiejioiojij3iooi {enter}")
  //   const para = await screen.findAllByRole("para")
  //   expect(para.textContent).toContain("404")}
  // )

  //click the backbutton takes you from repos page to searchbar
  // test('backbutton takes you to homepage', async ()=>{
  //   render(<App/>)
  //   const inputElement = screen.getByLabelText("input")
  //   userEvent.type(inputElement, "ria10{enter}")
  //   const repo = await screen.findByText('celeb-database')
  //   expect(repo).toBeInTheDocument()
  // })

})

// input field clears after submission



// black navbar appears on rendering 

import React, { useState, useEffect } from 'react';
import { RaisedButton } from 'material-ui';
import AddIngredientForm from '../components/AddIngredientForm'
import AddStepForm from '../components/AddStepForm'
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { getRecipeData } from '../actions/currentRecipeActions';
import { connect } from 'react-redux';

const CurrentRecipe = (props) => {

    const [isAddingIngredient, setIsAddingIngredient] = useState(false)
    const [isAddingStep, setIsAddingStep] = useState(false)

    const toggleDataForm = (type) => {
        if(type === 'ingredient') {
            setIsAddingStep(false)
            setIsAddingIngredient(!isAddingIngredient)
        }
        if(type === 'step') {
            setIsAddingIngredient(false)
            setIsAddingStep(!isAddingStep)
        }
    };

    useEffect(() => {
        
    }, [props.recipeData])

    console.log('recipeData: ', props.recipeData)

    return (
        <div className='current-recipe-container'>
            <h3 className='recipe-name'>{props.recipeData.recipe.recipeName}</h3>
            <div className='details-container'>
                <p className='description'>{props.recipeData.recipe.description}</p>
                <div className='recipe-info-container'>
                    <p className='recipe-info'>Prep Time: {props.recipeData.recipe.prepTime}</p>
                    <p className='recipe-info'>Cooking Time: {props.recipeData.recipe.cookTime}</p>
                    <p className='recipe-info'>Yields: {props.recipeData.recipe.yields}</p>
                </div>
                <div className='recipe-ingredients-container'>
                    <p>Ingredients:</p>
                    {props.recipeData.ingredients.map(ingredient => (
                        <div key={ingredient.id}>
                            <p>{ingredient.ingredientName}</p>
                            <p>{ingredient.amount}</p>
                        </div>
                    ))}
                    <RaisedButton onClick={() => {toggleDataForm('ingredient')}}>
                        {isAddingIngredient ? 'cancel' : 'Add Ingredient'}
                    </RaisedButton>
                    {isAddingIngredient && <AddIngredientForm />}
                </div>
                <div className='recipe-steps-container'>
                    <p>Steps:</p>
                    {props.recipeData.steps.map(step => (
                        <div key={step.id}>
                            <p>{step.stepNum}</p>
                            <p>{step.stepInstruction}</p>
                        </div>
                    ))}
                    <RaisedButton onClick={() => {toggleDataForm('step')}}>
                        {isAddingStep ? 'cancel' : 'Add Step'}
                    </RaisedButton>
                    {isAddingStep && <AddStepForm />}
                </div>
            </div>
            <img className='recipe-image' src={props.recipeData.recipe.imageURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBoYFxgVGBgYFxgbGBcYGB0ZHRodHSggHR0mGxgbIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0iHyUtLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xABEEAACAQIEBAQDBQYFAgUFAQABAhEAAwQSITEFBkFREyJhcTKBkQdCobHBFCNSctHhM2KC8PEVkjRDU7LCJIOis/IW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJxEAAgICAgEFAAEFAAAAAAAAAAECEQMhEjFBBBMiUWGRFCMycYH/2gAMAwEAAhEDEQA/ANmpVzNItRAe0qaa78vzpm9egbSfX50rkkYlFq5NyoJxGuw+Wn41Hx+L8MiT5W+E+vY+tKsiZi18SvQ1UlriIPWrCxfmqGJoNe1Gv4tLa5nYAetDOK5re6SmEtm4RoW2UfPb/e9AKTYW3byrqxA96p8bzRh7ZjNJ9KpLfL966c2Kvkz9y3oPmx1P0q5wPCbFr4LSg94lvqda1h0iG3Ml5zFrDsw/iykD8a88fHtsir7lf0q+WuhWNa+ii8DHH7yfWuhZxo6qfZh+oq+FJ7gWJMToPWtdGv8ACgN/Fr8VuflP/tpW+NmYdYPvr9DRCrjvXGJW2V/eBSP8wBrNmteUVljiiNs2vY6GpS4ihfi9zDhsqZrcncjMh30IOo+Rr028RaXONU7yWSPfdfnoKWM1Lo2n0Fa3a7D0L4XjYnK/kbsdj7Hr+fpVtZxgNOCiwxFpXUqwkEQRWLc+cpm2xBHlOqt+o7EdRWyJepvG4VLyFLihlP4eoPQ0GjJ0fOeCvWrLJ4oKtbU5CuZcz9JywTO2871rmH51w+FwwN4FGyjKArQ5M6Ax03Pah3nLkF0BeyDcQdviX3H6/lQNxLGXXtph7nwKV1ynMFBgkHqY60nQ1eTa+X+IHFWf2t9EJbIBqYVis+5I2q6sXWLL4inXQiQQp3BPuPpFA/AOdMJbFvDqsIqeUkZQuwCkHWdSZ+dTuHc62L98IhVR1LnLJkiBMTSONMyYU4255RZDqtxjKyMxyiCYEj+01Ewdk51fMVXWQICOTGp0nYd+tVHFec8NavOCS5VQFIjQsCdHYgECNTPX5UD8yc9FyUtOwtFCmRTDNmEHM3Q76qeu9FLYTQOZ+bxYPg208W7DZiCAlsgCM/XUGY9OlYtxPFLnbJ5rjsWdx1ZjJj515dxd6+IAIWdd8p9Sd2NTeH8L1k6tpJgDYREDbSmoy0V1vhZIBLsCdwNq9oytcOEDSlRpgNL4PzRbvaTlbsf0q6a7Ovy+dfP/AA/i2VhqQRqI/EVvfDcRbfDpcXVCgYdyCJ+tRx5eemTi7Q4iE15fsnoK7GNHQV545NP8WEjjBmZJAp/E2LbWmVtQBJ9PWmXJPWmeJXPDsXG6suVR3ZtB/v3pFxV0ED8Ne18sxOnt0qwxfMKYZQWPmPwjck+1D3EOKLh1CqM90nKqjUlto+v9KteWuXmVhiMV577agbraB6D19fp3NY2FKlbOcJwm/jG8XFlkt/dtAkMR/mPQem/tRXg8KltQltQqjYARXaCnVFOBs6ApxRSC1C47xEYew90xpoJ2k6CfSs3SsyVukWAFem4oOUkTEx1jaszu/aHeCHy2g4n4lZV+fnke2vSu15xxF0O4VAURbmkkQSoiO2pPsKhLOq0XXp5eTQbmO6KPmabxmMCEK0y3wkbSOlYxb4/ir162964QlvM4yyhcEZgsdyRAPrRtwLmM3L3i3UK2z8IH3dBoST+HoajLK/LNpeAtxmOFtgjsqk/DJjNHQVzixKEgS0Ex3I6fhQtzpjlKWsSCvi22K5DBlXhTB6EbiKY4VzcrZUysHEAhj2A6+0f2ouaEc41T0VPEnuuPEuqFHRAY2/oDNFXIPHxet+EzHxBMMBoQNvQ6RvQDz9iLjXFhWVTmIOhEyA3XUTH/AHUVfZXhV8Nrwzeby+Y/eG/uNopMenohjTU6CbiHCUuiGVUc9PuN7fwn2+lDWIa/hWhgzINxu6jv/mX1/wCKOMUgdCpI9D2IqLibIYi1d2I/d3NJB6j+3WupT8M6K0U/DuMK4BBBBq8sYmaBOM8Hu4W4WUT94quzDqydj3H9jUzg/GZA1kHaqpk3Gg5Vqq+K8tYXEf4tpSf4h5W95HX3p3CYmRUxrwUFiQABJJ2FEAA8Q+yywZKXriDfzBWA+ehoL4hypZR8q4zP3C2vyJePwq55z52e+/hWZ8MHQLOZ46n09KZwXLGJuJbuoyjMAxVgQRPr1/CpNrwNY1gOUcKR5vEbTXM8a/6QNKsMHyVhAZW2Z6ZmLx8m0qy5e4W5vBRct3FHxqPKwGvYkTPT0NTbDul/wWttOpDASMvf36RWTQCpxnLLqJUBl9N/pUTDYODtWgoVLFFIaAJjbUT+RB+dQeJ8KzDOgGbf+Yf19acxR27GleV5+0Rpt6HevaY1MyfF2yretHPInHrqMqZyVnKVJJWG6R01nahXHWZY6UTckcKZ7+2i5ZPqNYrzPTy5UTSNcssCJggfX8RT6sv8Q+td4W3AFSwtd3tIYheIBsCx+g+poY504oLNsvcbWIVR0noP8x79tdKL8S6opZtgKy7ATxHGNiH/APD2GItqRo9wfePoNPw7GjxSCl9kzk3gJB/asQP3zjyKdrSdBH8Ub/TvRjbWmrYqr5y4ncwuHN23EjoRIbUDLp3mi3xQyTky78eLi28rEsCcwUldOhPQ+9TltntWaW/tDIYi4hQKoJVdZaJgdTVxyFzM+KF1rmYtmlVKkBVMgCTvqJqEvUJMt/TtK2FxvwYoX5+LvaVVtG4ky0dDOhiZMamBU287uHEqL9vUgSA66Q0HY6wdxP4DvEeLtGsgqTmDDY9qE8yeO0bHCpgxjMEjKwNp1mCz5SW+I6Lp12qRw3hty0ly4ttmLHw0DaELGa4xnuQBrrpVnZ45bDgjWFYv0IOgCwf5iflULFcw24YIc+cREww6GPwO89prjU/lxK5MtJtARj+Jo1tCkn4gx76jKNOgC6VL4etzwg1x8iMA0dMomPb+9Kzw3DqlqFExmdDI80ZQp66hS0dz8qv77grYQwMgzHKshTEagaBYEfX1q0mukcjdvk9WVljhmI4he+DIjr4guHQQIhvLtJ0AGwNUhF9bzKbh8rZWuCXy6GGzDppvWwY58JgcJlZW/fHIWAbW4y7AiMojrpHXWsh/6hcw7PaKhoJzTIJjQQJj6VXikqKcVPvoMeXcZYdQlzz5VXObiwQfKgC7Fv5vQdpoxwNuzg7CeDqpuqryxM5yFzeh2+VVfF+S8KcMMjOL5Eq4LE5sun7sH4YEQBsN6FOEcSu4Z8uJJIU+c+ZwrBYylZy6a6x+ZpZRcWGO+v5Nqw7abD+npTeJAYDMJAMjfeg299oeDVF8MvdZh8KrGX+YmBPsSaK8Fez20J+8AxB6SJ+W9Uf0CMk2S/CW8nhv11RvvKY/PX5is55h4W2Eul4/dk+cDZZ2uD0PX+2uiWVK6Dfce/SnOMYEYi1oJMSs9QRqp9/wNUxttb7BOk68AXwjiMaE1X/adzEbWHWyhg3NW/lH9ahG0bD+Hrl3tk9uq+6/l7UJc/YgtjFQCcqW5EE7qGP4mnk9CUSOSeFtfZmPlb7pIme2naa1Th+FKoNl/jUGVB6lfnQlyrwjJkuMCNAQAQZJ+9oexOnrRthb4z+GQdu2nzqNqtgY5g+GpaHiKBmggR/mIMfUVIwoYNLDQ9T+VPWxKwP4t/nvUzEHKAOtFK+jFZw/Ci1mYbMxJ9ZO9QuFYkuGDAAq76dYzHKR6EVaWcRmJUj0qI+Ft2cqq3mnQHUkdp9AetPF/QCHieCWXYuyHMd4J7Uqt10pU/FBtmPcLwBu31sohLE+Z2GigbmP61rnBOCJYUKo+fU+tXK2lmYE94E13FSw4FjQq0cKlOAUhSuvlUntVzAF9p/FXypg7J/e3zkHoDufkPyNSuDcPSzbS0nwoIHr3J9SdfnQ7wdjicdfxbaqn7q1PrufpH/caJsQPIVC5iwPoB6k/MaUn6GWtHnE7t5AGtG2dQCrnLmJMABtgZ01oU51402IsKvhsisFZYhtmksCNxIX3BHelxyzi0Qqy3XRwY8MpGgJicuYEaHedNPSrxGJvXzbcWw+EhLiiP3lpo6aaKNR10+lcuSbb+gY8jUtIicuYQZ2dgC4UnMvwiRkWPmdesA96J+Vsfbsrcdxkun/AArQYlYOgiRMflMV1y9hOHsXfN4apAdXaGLEAiQTO20byaEec8TN1zhhcG8m5A+HUC2PijzycwnWp8Om6O6eV5MdJNMvsXzNcwt58wm82W4CfMHQ6FYG2xGX0FEmL4YmIVbwllcZgrACV/gb/MpkA71TcE5fOIwP7eWJuXEJZMsHMhKkgmYaQTER5iIMzT3JnMZOazcUat5AJgiNwfumQZU6iD8h7dNp+RY1GNp9DFvlrA37jrbxFy3fA81u4oYqIiQpgnQkAyasE+zK15XTEXQROuRNZ07CpfMGAS8oe3ZN4hiM1tlS5aYbiSQQ2u06+xmowx17D5UuFr1rLKict5Y9iA0fI+9C4w1JB9tT2mU/Efs5u2i1xbwvWiP3i5StwAGcyjUEg6zvVTy3dFy4zkOSk5U+68kwPcjqfWtO4Vx9LiI6tMtlmCD85GjCQDU3G8Fw95szW18SCPEUAOBvowE761ZQjLcTmli4vZj/ABLnG47HC5LT24IdWk6noCNc4jcfShTimL88gTdYKCNWjQAEgiSx7R7ztRfz/wAvvw+7Zu2QiWc0i8ixdW4ZzK51BBBkTodaB8DxDwcV44UvqxJYdejDYZt99PanrdMzi0rvRsPKmPt3GS2UVLyKSyr0MANMbnbeoPOiqzwiKbqqHdjpFuW6Qc/wMMp6EwRQTyfzGy5mBVbktLORLFiAoJIMgSNNPhOvSuea+L3xcu3hdUsyrZcIukJm84OoiW6Hr2reaY8YtfJDHB/Dt4i44AZbbeQNqGkkD9DWhcL5tdFXMFyjeNCvaRt/v0rPuUsEMWxtgi3cM3F/hJH3R/CPqdOvQg4Rgb7E2hbCssF1ZhIEsuaDuJXcelSnyT0QlOXK10a/wzFi6iupmak8GuH94h+42naG8wHymKDOAW7ltUm4rljqqbAETv1AjfTejHhrRcde6o/z1U/goq2OVstJfGwf554NmUukAnzKezgaj2Yfke9ZRxhz/wBTGml1LehG2a2ra+21fQePw/iWyvXdfcaj8axT7QLLWnsYm2nmH7tgTAEmU09pX/RVZrQidovuF57V9ERDcUqBmk5VPv7DWibFK4ZAzRI8+U7nsPSqxOJoioV0JAkiNBIkx1NWV/FBmAGo7nf/AIqLjpqwItuGeTQg6nT0ru/cDNue0ColvHLIUECdN5qSzlm1BjuOn96MUlHijHRwOqkEjq3rTOEtKzudDlOnWDGtWRBC6SfpNU9zGlbpXTzrP8pGnzmfwp6SaMSbLSoNKvFYDSvKqAuK9poPXQaiAdFD/PvEv2fBXrkwcpA9zp+s/Kr4Gs6+2W8Wt4fDj/zryqfYf/0KDGj2Lk/BeHhbQYeZhnb+Z/N+AMfKiawtUuJx9uwoa4SF2GhPyqVwzmCxdICMZkCCCN9vypeSWrBdsm8cs5siZSxEEZYlWOmbUjoTQjxHl9hnFsNb8SEYjfK0ElIPyM9jRo7hmY9ZgRodKXEMJ4tpVEMR8UkA6T+MxXI48m2dCjFNWjHucmWxi8NiLZ85m0REllXKpPv5jrpvR9/07C32Fm7dX/6VRdvKNC7smWS38CgEGNzodtaa7yJ+23i1zxEti2yDMMpViZUrr5oMz0IY0KDC4tcQcJfFvxYH72fLCAQ8Eanyz6n5061G6saTVtXR5yhx17OOW1ZuHwnZ1CEkKQMxDEH70DWRvRImOyYq4RbRUuOAwUzlbSGI1ALag7b0A8K4SbuM/cXB+7cN4jH4gHGoG5J1Mduoo74tytiL198Thmt/EAREMYVZVv4liCOoOvWAsk30znWWFcexrnDi93BXFxNsvbNwedQR5ikqJGx0I1PRVqZwbnSxjwMPeBtt4aE3RoPEJECIMfzbe1V/NiXMThriMuW5bZRlkD0IUn4pUmATMxQtgOH4dbVxEW4Lx8MXM8ygDkypjL5lhdSfinoa0UnFpm9PPdGp8f5duPbizea1MOMsFGO4MfjIr3g/HcTZi3ilWY/xFko2VSSW/g0E66etB3KfG8Tbz4RLWa44BQXWBseEr+YLB0JDbAbkTRvjOI4bw2W8bdppFvwrzrDZgIAOpKEHRiPcCl4ySuJ1cldSL65hrOKsulzJct3BDLuP+R0PpWVcw/ZFiFc/sd0PbOmS6xDD0kAhh9KKLnCb2GEYY5rfWy5kR1yNv9Z9CKuuV+MWrtsW7eYMpHlZixX0k69DpRhlt00LPFq0fPvGOB3sLdaxeULcUiY1kEaEHqpH615hOIsroWywCIzzl+cax6V9AfaHyouPwxywL9sE2m0k6T4ZP8JgfOK+bcUXU5LghlMEECR6H2roas54uUXoOvs2xVmxdzXbkmQthdCCXMF/5gDGvf1op5q4+v7UHQZRbCob43YMGzW9RuCQfaswwlxRaLqqsw1BMll0IMSfntpGlX3EOMnEJasm1bYqmTyqNZHxTA111nqJ1qU3poosaCrgfNiJePk8oUExuI8uatI5T4l+0fvY0Ktl/l8SFJ9wJ+tZLy7yxcvN4nwqFy5f8vlO/vOkadzNa1yjhws5ZyAKonT1MDpv9QaXAvkkuh8lKATUA/aLhgq5mE2ywS4OuVzKsPVX1HzHWj+h7nnBeJhbo7o31XzD8q7Gc8ezDhdfDXmOIdmBOZI1Ug6giNhrtRYOL3LeRmWVYGCWAUQep9RqN6p7RDoEcAqdRO6k9R+oqTxDh95bJtsM1pgIkZgB01MQRUHEIdcFxlq7bW4iDX+GDrMHUb60Q4K+SrLlg9NZkR+GtZ1yrcOHti2BKnXcCPwoi4Hi2tu7Fi2bq52AJgQNOtPGNChNicSyLmYaDcKRPyneqcsAz3W0nadwo/WelcXeI+IYANwg7IJCmOp2Gh6mu7GCY63IMbKNl9Z6n1/5p0gldde+xLBmQHZQFMD3PXv60quxYpUeJuQ7Yx4Ma1NS7JrNUx1ywFbOLll/gvJ8J9D/AAt6f8UTcL40G61k7A1QXWzWZfaCfE4rgLfQFn+kn/4VoWGxAIrPOZdeOYf0ssf/ANgoS6DEteMkDD3CVDeU5VImT0Ee9DHKXDrhxdu4hU4edzOadPKVOzA0aXsPnEfTt86q+EcKb9qttkZMpAuHZSNTA7+Y1z5k+SdE98kE9u0PMY3J796fw4yyDr0/ONY7V5atHroRuATvXDAjzA6jTbpSLW6O170em+QxYzliCN/Ygd6xfm/jxxdx1VAXtsyg27erAEqCWGuo9etbBcuA+U99NPWsx4Bgl8bFIgZSraKIMKdQJ6FTInrFJNvwRnjuSXRO5Q4HbtWM2TNd0zaDOriR1Ij4usbUSfZ3xvx8OyspWJUT8RZCVYkroIIAnrIoL47wd1uXHBZ7RI8RGkkEgeZT0IJnQxoNqhcMxNzBsbWFYyvmyPEFXjMV0Pmgart1qkXXZGEeMmmWHEWuAPcsgNae8y5mYsTcttkMEy2yyAehEVXcI43asm/4loviYAVrjWym0L5eu8kxOsCot8XMzKivbdr2dVJZkYv5W8mqjcHPuo2NWWPw1gq982k8ewAwdXOTOomPKRnAYQJ3ET2rJqxpY+D5Jj3Bbngqb1qzbe8rK1u2t4u1wMmTMZ+FSBOw2qsvricdYuYjEpbCgkzl+AIWBTSSF3Ek7ipXK2Nuur4y7dth7a+H5gYGufKfNJJmdNu1Oc58Uu2LTWLTWst5Ve9LDOnitJCHTMDJ22APpTcFTQ8X97G+QcViBAW9c8ETCMZA3AgHYe1Hj4K1ilR7bZLq6i5bIzqZ1DRIaCCD0kGs94Uq4ZBcd84mEMCAOnX8R/anuH4p7d0XLd0gEkeWSCT2WY+Ij119Kg2m9nVj+UbizWeFX2KhSwN5MocQRMjeD0I/UdDWR/a9ymbeIbGIjeDdClyo0S4Tl83bMSNe5q75TxN7EY44gBwWUAhSToABHqs9+9HePx9tg9jFWnCOCpJGZCDoQchJX30966IvRzSq6PmaxY8wAO+9FvL2FyXhlIZeusHbWDUvnPlhcJiT4SfuXg29cwgjbMfWevarblHgjMviuIJU+GmktOgfWdAe87fXmzNvReEYqNsJ+XEyJBOVnkhSwJRTOp3ECjbC4u3bUKJhQBIBI+sRQxw8AtmbfQa9ANlUdBP41d4W+Aw0MfgfnWw5owVIhklbLi3xO22gNecTdWtGSADpr6gj9azDma9cweLlD+7ueZR0Hcf770Y4rNdwSyNS1ox/rWvQjLkiS7Msw6wI7afQxWk8BM21nXTWgXhfDwxuF2hQzwBufORAJo+4Vw5lQFG0jZv6ijFDSJv/AEXDt/5Kd9Bl/KO9dWeDWF2tr85b85qRYumPMMv5H51JWjQLGlsgCAAPQaCkEqRFeZawBnJSp6K9rGPmfhHMV7AsUe2TZf8AxLNz4WB+8P4W03G/X0NcLikCJfsuWwzmFY/Fab/03/IH29DWZ8Ue7fm/dBlo1G0AACO1TOTOPHC3GVxnw9zy37e8rtnA/iH47dqlHorPTNx4NxjYE1S8yPHF8E/R7dxPmBcP61VI3gOED57bqHsXJkPbOo16kA/ka85pxJy4TEqfNZuXB7yqkDXvLfSi5aF6DfGcZsWMvi3VQkSAdyB2G9RuIc3Lbwpv28pYPlykzM7EEHaCrT8qz7Act4zHPnusyLPxXZJ/0r/xWi4HkywSjXfP4ahQDokCIlesGTr/ABGpuU5dImrZdcv8Qe9hbV9xDMoLdtZhvnv86nlg2h67VVHiDK9xDbYBAGVl1UpAA9mzSMsbCa44fxm3fJVfK8+X+F40MHvOnvUPdjfFnVVaLJ8OBPp1O+oqi4fyutlmuISzOdSdwCSYPeiC1dnRum4NdQZP+4iqcUzebKu9gCSRIgyYIHQR+v4VRf8A+fVD4gSHtqSpXUkjYgEQCR196MnA9z0iotwSpA1I70XBG5GRc5tirZF9Aq5gpeIXISuVly/xEncHodKHOF+e04LxcLs2UTlYmCsgGB5pn3FaF9puDdltWxcUWbjqpLAyGBJEkDUtO5geUbak07/Z8pAZHYCdS3mYx7Edam/pE6bdeDjC8PwxQqpBuqMyukwbkKcjoRJG40OkN3FdY7DWWw126wWSoKyQFYiRJ6EyI9ielXOI5byIj2WBP3hJJObLMDuIJ12k0J47l+7qty8ShbVApUkkySP9Wv1qPNJ/LR0WoQpIqeD3bj2xZtAXBA80ERKyVK9BMwalHA4gJmVWVVUlgNIgjzLHuDVrwPhF0XCyKot5Qj55Riq6ypI0IBiToaJ+D+CRcZyHQ5gATouSZH0O9Nak7QMOKKjy8lz9nDKcKjpAz9uyEpHtIJ+ddc5XCLgMnaoP2Y3Js6KVTxLuUE6wbjET66z86tOcE/eL/JI/Kkz8p4mlrZzdSA/mK7cFlLgBdA6pcskwjl2hSdDHmgGImaJrFjwbfmMuNz/m6wOiiYA6CqazjFtWbt26uZEyMR/LcU/UbirU8w2MXD2crAaEGVad9jE0Em8X6CT3Q5gbTXWkToDqFETto3U9asLLhFCK3p61UXOOpbIm5bSNpZRHsP6VK4fdfEtlseVTo11l6dQgOpPqdPQ0MWDl1/Jmyuxts4/GWUUeSysuf8zGcvuAB9a0J7QS17R+FccK4PasJlQe5O5Pc01zZihawtxuyMfop/rXqQjxjQF2ZVwp8wX1Yn2lyf1rTcOP3agbnSsy4Mgm2OoitJwuIChZI9JoqSS2M1b0W1hehpn9l6oY9D8J/pUC9ibjK4U5DsGIB7a5QR+JFczKFLhYyIJDFTqNSChkfWkeZeBliZPXEjrp+X1pftS96g2gQAAdtoA7R13NOLeYbGe86flQWX8D7RJ/aR3pVVXcMxJIs2zOsl499MvelS+9L6D7Ufs+duXOJqWNu8BlYR230Pziqtl8K8VOoBj3B6/Su+Cm2cRb8QQpMEyfLOgbTt2q35h4A9i5Dw4iVYHUruJHeKNqMg8XOBfcp4rx7T4DNLpN7CMe41a17ESY9W7VOs4j9owl9NmXLdAO6m2xRx7gOf8AtoUwmMK+Hdt5bbWWVljQSN59xofeizG4m3ax1rEL/wCHxaC76RcHh3l+QafeinYlcaNJ4Fi/FsWrn8SAmNdY1/Gru+8KvrQHyHiDbN7COfNZeV9VY7+06/6qM+I3AuUsYAEmYgb60Mj+AYR+R1+0KsgsB70BcexYFlWsFWzOgVV0yaknbroAR31qz49xXD3baZXVixKrLHKZ9NidlnpNDPNFrDIyZbuckIGdBlQSAuVR8WrtmmdBA1NeZOHuyb+jpUUmHWL494YH7q7iCiA3DZhnXUDbYgQTOm1TuEcxWL6qbN9WzAFQfKxmeh3PoJrPfs64m2HxzWipYYjybknMksDqdAFzVD5kwS2wbdkvbtG64GwKMWdyGBEhZPTsK6sbcYpt2SaptM2Nrh6iD1nT9N6jJbInMS09dqyLki5iLNss3ELsBigtB5X3IuSNekR71a8L5px4fELiLroFVmtG5ZRFIERByanrvVbTJxyJ6Qe8Sw63LRR0V1Iggjf+9ROHYBUyqC5U9zIHpO/1mgbhnNOPdWm5bYzl81tBBgHMIgkmetQrn2hYy3LBLDhdCcjCD1OjQfY/pSJpsqk+PI1W1hQhZjAXUb7RG341V43H4fMZdM0GQ2XNr0yk5pn0rOThMfxG2b13FMQJ8NVXLbntlUgekmTVBy/jDbvFWAkOEaPhmYJnbetNfXQqa8ms4srivK0rb0GRdFYfxEkT8vaomI5ct28Pc8FWEzmVjoQp1I1MSB8xT3DLuZ3t7QBBHUEbj5/lRBjlyYd21JVfcz0pYRt9DSdLR1geHrZUKogabe39qr+aWJ8M+hB/7qIxqoJ3iqHma1CKWgCTv8qn6yMopuPk5F2BfM+HdsG1pPiuOiD2nM34KaHRywioNTPWTufajh8G5uKziECyoOh8x1J9YArvGcILIWX4u1ckpZW+EdURyytmU8QwHhkwI9tKKuRed7lk5X84HTYx3B7jtUPjABlTowoMxBZHkEiDpXZ6TK3piQl4PqTg3G7eIQNbMz06ih77UMflsC3PxsF+Q8zfgB9azfkDmcW3JdsqgZm9ABM/hXvN/MD4p7ZdcsJm01HnMj55cg9wa75TqNnZjXJkvl7F58QvqYVR1jc+0a1o1jChSWJJgyszCkiDlG235mhDlHhht285YB5OaArELoQgPQmAT7elFJuE/pXNdnVxolWW8xnbf5967uTpEepJ/SK5S3ABr1l7zRoFoeS5Ej06dK5tDrXKr2r2+25GpA0B0Egd/WmAPzSqHg8+RfFZS8ebJos+k9KVDl+G4nzFwa9bV5f5dqIMXeOIdbKkZtPMdQqakz+GnvUPF8PS2WslCb6O6nTQgHQ+mgn51bcocJVUvXnuFGUeQAAy0MQsbn4dh9RRm03yDjUl8SqxvAMUohVFxZjyb6mNQT6/KrXBsbvCmQ/4mBxHQz+6uyp17Zsx+VE1l3/6ddxkobzJl8pnw11112IBBI/pQf8AZ4xdsZhzqt7DPp1zIwKn6M1Njk2nYmaCi1QVcO4iU/Z8aN7ZFjEeq/dY/wCn8Uo856LPhl8M/wCIFBIP3T1HedB86zPlW+sZbmtq6uS4OwOoYeqnX6960rCYU2sLZtucxRSk9Cudog9ssRQyr4mxNWjP+LsCEw5XKqCMpGsj9f7UsPyrjBZU4e146M+jBrYNshtQSTJA/DWjHmngeEewroxW8iqi6kzMQXnU6CZ9KGOEc2YrDObVvI9u2pN0GTmaPukHTXrBmPSoQjTqR058sfb5Lst+CcIbChcVfOQ22OVbgRmJIICrlI1ImDJ/Wh3mh7t62t9V8pNxm6EFXcsGE7nUxvp3mmMdjzcvWsbdbMAW/dSxC76qNY3qm4DjLRxFw3jcFm6WYOgjzEknya6EmI12FPSa0cEc3J3IMEK4fw7+HBZD5mkEExuJP3hBn5UZrj0xFqbZVgfizrO4mCO8H8ar8Ri8BisKMKLjWQY8NktvPiASCfL1I1XSYOtU3CcVZsMcM8gGGuXbTBbeZl8txZOY6DVPTrrQUK2mS9qT6M/xd65hcQ8tmWSHInKytJ0B2YaQJ0gCYmp/E2R1VbLFkYgM0eXUrDNBJWCx8sfqAQYzDWSuIuX3DlwLNuBBLFpzNAEADc6RNVSYA2rd+2vlhv3RWSGDeaCOpGwOkazWbWm+zojklGDsn4HjBw+FbASH80W7loyxRtQFA3bNp6VDxHEmwIuqbVpjiUBXqEMEHMD8R2J23og5ewpxFi5cvlBctEBxGVYCghp2nXWdNqBuaMYmIZbihgzTI3XVjGUnU6D22inTbYrmlHaLvlfFXVBkkXbQ1OpzSNFjrIG/qK1TEcWtrgmv3D5AgYxrJ0IUepOlBHL3BL11bd0QLpyi8CMoW3DasDrmIgiO9PcQuf8A0t/Dh1YJfABYaOSQwSNwR3G2WoRuEm/Bub4MKeEc/wCGvMFcNaLTlLCUImILD4TtvproTRMMPbdlf4sslewJ6gd/71gjE2gykg6x1jXpr/vSjv7LOOWvDuI17UOclpicwXoFHUe1dGLN7mmcuPJy0wx5jw3lDj2P1kfrUCxiARPXqKJnQXEykET36UNcX4S1uY26Hv6Go58co5Pcj15NOPkBOdMGpbxEGvWs/wCIiSa0DjjPBDD+lBOPwvmn5gDeuXBK5slFfIpsrCFH3yFI7iQSPwo75awTXbymMwBzN2gGWJ7dfrVNy/wi5cYuVAYwloEGBO5/StV4JwwWAlpVDMxm60aQqho9vPAHrNd83dI9PCqjZJs2wpYAat5tgD2GncA/U1LRSenXQb/70pg2CbhPWrC3agDvOusR/WgkUsfXSk106GO9eEnLUW/hwzW2OaUnKAfKZ0JI60W2ujJLySXfK09NPxpZhI6zTL2FcZWAIkHXupkfQgGuWaGiZk6CNoAkT+PzrWZI7e4QYyOfVQI/OlTheNDE/OlS/wDQ3+GDYDmC1ccl7c3XctJIGrSdzpG3yEQav+GYw3StgqGRLq3mygKWKmSRJgAsRoT8M1V2eE4Bwq2lYuWHmNxs+40ZBoszoQDFQgrC+xt3nARmQK3m0PlYkiAQTpMdqM4xbtaDByWnsl8awF/9vvWLbOLd7zXMoEZTprHSIk+tFnB+U7GDxeGa2Z8bxF1YnTwbrFY2iVUg+h7igq3xZsPc8YHxS6SC5YEaieuoq55G43cxOOwyOFC2fHu6ZvvWmUjUkAeafl608W2Tmkk7I/AUhQOxI+hIrTuBMbmFKGSbZ8sCTl6j5dKzXgo0nuSfqZrTuTB5Neu/5VRq1RFOnZRcf4aL9trQSXGsMYBPSOo0EfOg7g2C8PxLZRgCsE9CVMsojWTtOnxHSRWsccwJSHQag/UetVmJQAAwFkhTI7kmfxrm41pnTyUkCXCMNcZB4mG8NiQSCfuxEABYMjXXqT6QI8a5efDulsXQSYMEQBm1JntJ29a2i+s5V9CPbtB/Shfm/l67eurcRZkACPu6QQddvXpQ2nohntxVIFU4GLvwXGBt5SHAzIWB0LrIUydAQe00/juWbgWTdFwiGZVTKzwAGCkEmddo71pvKvAbdq1lPmzAZlcD4tz6R2FP8bsILiXrdkteRhqoGgjXfffprRqSjbE4yXxizLcfzFawt1/Bw6q9xVW9bds6qwBDFfNJkBZkDYTTeNvzYV7ZZWAnKRJI6sOugHsOtSeNcQt4zF3ItMkqBcVkzEupYMwjYgADUd+1EGB4bhrmFt2WaCoDK+gIOh/USDvNCVN0c9Su6KjHcQS/hVw9lwrPka8V+9nhWUnp7T2Hs3ieBXMFZt4i/btsi5VBEC4Cx0EEeb5agTVBZ4LicNiSLZBVWy5iMoJADbfTWrHmjit/HXEtkgi0BlRCSC2XzN6tOg9Pc0EltNnRmxylG6LV+Zb1lywCXLN/LlAJRlyAiDoZ/vQfxoPbuRmMuBdaGMF2ZpMdI6URcF4deayUuI/+ICkqd2Gy6em3vVpxXkK6wS7kDkSHXrGmX3A1+tHGpP8A0c/L4fpWcq4e1iwtu7bZnCsBcDkCSwVJQDUgEmZ1ynetZ5c5Xw+EULatgGBLHVm9z+lUPIPJv7N+8cFXP3QfKN4+YBIn1NHiCurHjUV0NCNHSCumUEQRI9aQr2qjlTjOXMPc1ZPoSKBeOYHCm6Es2k8NTqQJa64HffIv4n/TJBzJzAXmxhyTJhmXdu6r6d2qHwrhJXzEydjA0HoPSk4r6GUUtnHCeBjMtwyMpkAbEwQJHaTp7Cr97UK5G8/2/IVJa0EUfL8Nf0rxRNvXcE6fOfyqUlUiyeiBk1kjtXt5JadQQ0jpoREU9lIiR20pvD4YDQFjMmWPf9KRq9Do7PauGtyCJO0af1rsKQekD+n9aUx9KPfYBvD2wqgLsNK8dvLPT2M/TencsU0tbrSCIE/7NKvQ3tSrWg0fNmAxq279u4c2VYJAYSxHbbSdYp7B8R8R2AAGYkyxHWdD7z3qRwbA4dgwuqZEdT39675p4ZZs+QMniBZIWDA6T66++1G03VAqUVdlFexJVsrLsSNZ79qN+RRbXEYq/anw7ODfUnXO+UD6w30oSwFvxgZIAtrLNG4GwPrRdyxhvB4XdufexV9ba+tu1JP/AOWcVWqXRByt9j/CLcKo9BWq8rWMttazvgOGzuB61rHC7GVQKaKFZY+GCIImqbifBQTmCg+sa7f8/WrxacWhKCl2aMnHoD2ENDSDOpGwnvXpukXPDysdJzj4ddgPWiXEcPVum/0qnxHDChB/2ajKDRaM0KySNOoNSFYGR170x4ZkmdIGX33JJ603BYOskaSCN9NvxpRuyu4byzatYi7iAzlrxlgYgazpHQnvXvEuBsrG5YOpMlD8LGCND03/AAq3sgErrpEGlado1UrJIgkHY76UKRo/Hoyvm7D32cW7iuo1aAAcx1H3TO0a7fhVjyRy41vLibqlc2iKQc3071pIEyIloOUf36CpOHwkAZtSNQOgMdKaOIE8wsPhRox3Gw7Tv86mqteCuhXSlRzCiuhTWIvKgzOwUDqxAH40PcT5uVfLYXOx0DNIWfRfiY+giiFIIsVi0tKXuMFXuevoBuT6Cg7ivG7uKJs2VYIdx8LEd7h+4h18o1MfTmxwq/iHFy+zDtMZh/Kuye+p9qJ8FwxLaZUAA/M9ydyfWgHSKLhXCBa1Y+eIzRt6AdB6Vf4GzMkx2r260CGFOcMPl+Z/OmF7OsQAYHaq7CEZrqzJkMRMxI0+Ua/OrV7cKT3/AK0P8RxFyzirOVJs3FZbjgaqywVk9iJ+YrmzaaZfFtUTGIP5z7U1vr6bjau8kHf/AIrw6ArpodAO0UBhA6Cm3bp3ru1tv1qFdwq+Mt1mOYKQik+UHqfU0sm0tDRSZLFcMKVu6GEggg7EV0341rtaDVES1fRxmW4pB9Y20O/rXtN/9Nta/u11JO3UmT+JpVL+5+FLgfO2KW7bzK6BTOs6nT12O4qve4p6Zj1Jqz4v4lzzNJJ1EbQfQf70qmymY611Q2c2W0y0wlliEs2pNy8Qse58o+utaJx20qPZwdvVMNbFue7mC5+v61TfZ3w/wkfiN0Tkm3hlP3rhEFh6Lt827UV8t8GZm8R9WYkme5Mk072SWi75T4VlAJFHWHSBUHh2ECgVaoKcU6UV0BXgFdVjCr2J3pUqxiLewCkQpK+ggj6H9IqBicJeXVERzrpmKSI9QY1q5NeGlcUxlJozo4viVhy9zD27gk5QhZQoJ2JJ8xEDWKl4fnID/Ewl4H/KQ4/IRRyw/wB/X+tNtZU7qp9wDWUa6DyvsFcPzlZ3FjEj/wC2D/8AKnBzlbO1i/8A6gij8WoibAWv/TT/ALRSGBtDa2n/AGijsFoFDzxmJFuzJH+Ysfoq/rXB4nxK8YS0ba98oT/3kt9BRktsDYAe1e5aJrAy1ypeuHNib5nsksfbO86ewFX/AA7gtqz8CAHqxlmPuxk1a5aUVgWc2rVP5aSCuzWAQsaQR60uHLofemeI7gdyKm2kiiYWMMCq7HWcykNIBgyNCCDIP4a1a31kVGxLgJB7VOceSHjKmVeCbMCp6bTvXN0DXvNdYfDhpK6MY1GhiZE/j9TUnEWtR1jeoJOtl21eiEpg12wVgcwGuhnUfSo94ubgAAyRqSTmme3b1p8LQ7CIgDRQIHbb2FeayCCAusiNT850rpVgSa6aOlGjWRitKnitKtYT594UxF4AEgZv/jVrz9hba+ZUVWIWSqgE+XqRvXtKqYeiXqOwoxKAW+HqAAv7OpyjaSqaxtOp+tGfBVEDSlSqkSTCKz0qStKlTCnQr2vKVYx7SpUqxjw17SpVjCrw0qVYx4KRr2lWMeUqVKsY8r2lSrGHErobUqVYxVY//ESrQbClSomParsd1pUqBjuwPLUTijkNbgkSwmOtKlXPm/xL4+zi4Na5alSoDnbfCfYfnXNKlQ8hR7SpUqAx/9k='} alt=""/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
        recipeData: state.currentRecipeReducer
    }
  };
  
export default connect(mapStateToProps, { updateRecipe, deleteRecipe, getRecipeData })(CurrentRecipe);

import React from 'react'
import '../css/SearchBar.css'

class SearchBar extends React.Component {
    state = {queryValue : ''};

    onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.queryValue);
        this.props.onSubmit(this.state.queryValue);
    }

    onChangeInput = (event) =>{
        this.setState({queryValue : event.target.value})
    }

    render(){
        return(
            <div>
                <div className='ui search-container'>
                    <div className='uis icon inline search-container-div'>
                        <i class="youtube square icon massive"></i>
                        <span>
                            <form onSubmit={this.onFormSubmit} className="ui form">
                                <div class="ui left icon action input massive">
                                    <i class="search icon red"></i>
                                    <input onChange={this.onChangeInput}
                                        type="text" placeholder="Search" 
                                        value={this.state.queryValue}/>
                                    <div onClick={this.onFormSubmit} class="ui vertical animated button huge" tabindex="0">
                                        <div class="visible content">Go</div>
                                        <div class="hidden content">
                                            <i class="arrow down icon red"></i>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default SearchBar;
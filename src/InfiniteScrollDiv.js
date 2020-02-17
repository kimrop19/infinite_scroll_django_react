import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

class InfiniteScrollDiv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             next_url:"http://127.0.0.1:8000/api/list",
             count:null,
             more_exist:true,
        }
    }

    componentDidMount(){
        axios.get(this.state.next_url).then(res=>{
            console.log(res)
            var has_more=false
            if(res.data.next){
                has_more=true
            }
            this.setState({
                next_url:res.data.next,
                count:res.data.count,
                posts:res.data.results,
                more_exist:has_more
            })
        })
    }
    fetchData=()=>{
        axios.get(this.state.next_url).then(res=>{
            var has_more=false
            if(res.data.next){
                has_more=true
            }
            alert(has_more)
            this.setState({
                next_url:res.data.next,
                posts:this.state.posts.concat(res.data.results),
                more_exist:has_more
            })
        })
    }
    render() {
        return (
            <InfiniteScroll
                dataLength={20} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.more_exist}
                loader={<h4>Loading...</h4>} //can add your custom speaner here
                endMessage={
                    <p style={{textAlign: 'center'}}>
                    <b>you have seen all {this.state.count}</b>
                    </p>
                }
                pullDownToRefreshContent={
                    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                }>
                    <ul class="list-group">
                        {
                        this.state.posts.map(post=>
                            <li  class="list-group-item">
                                <div className="panel">
                                    <div className="panel-header">
                                    <h3>{post.title}</h3>
                                    </div>
                                    <div className="panel">
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                                    
                            </li>
                            )
                        }
    
                    </ul>
                
                </InfiniteScroll>
        )
    }
}

export default InfiniteScrollDiv

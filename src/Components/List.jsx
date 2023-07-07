import React, { useEffect, useState ,useRef } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import plus from '../svgs/list/plus.svg'
import box from '../svgs/list/box.svg'
import search from '../svgs/list/search.svg'
import filter from '../svgs/list/filter.svg'
import download from '../svgs/list/download.svg'
import updown from '../svgs/list/updown.svg'
import leftarrow from '../svgs/list/leftarrow.svg'
import rightarrow from '../svgs/list/rightarrow.svg'
import file from '../svgs/list/file.svg'


function List(props) {
    const record = useRef();
    const [pageData,setPageaData] = useState(props.data);
    const [recordPerPage,setRecordPerPage] = useState(10);
    const [count,setCount] = useState(recordPerPage);
    

    useEffect(()=>{
        let initialData = pageData.slice(0,recordPerPage)
        setPageaData(initialData)
    },[recordPerPage])


    const handleBack = () =>{
        let data = props.data.slice(count-(2*recordPerPage),count-recordPerPage)
        setPageaData(data)
        setCount(count-recordPerPage)
    }
    const handleNext = () =>{   
        let data = props.data.slice(count,count+recordPerPage)
        setPageaData(data)
        setCount(count+recordPerPage)
    }
    const handleRecord=()=>{
        console.log(record.current.value)
        let value =  parseInt(record.current.value)
        setRecordPerPage(value)

    }


    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <div className="col-lg-9">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-4">

                                    <div className="container my-2">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex flex-wrap " style={{ justifyContent: "space-between" }}>
                                                <div>
                                                    <button className='btn btn-primary ' data-toggle="modal" data-target="#exampleModalCenter" style={{ fontSize: "13px" }}> <img src={plus} alt="" className='mr-2' /> Raise IT Desk Ticket</button>
                                                    <img src={box} alt="" className='mx-3' />
                                                    <span className='color-1296B0'>My Requests</span>
                                                </div>
                                                <div>
                                                    <input type="text" placeholder='Search' className='' style={{ border: "none", borderBottom: "2px solid #1296B0", display: "inline-block", outline: "none" }} />
                                                    <span><img src={search} alt="" /></span>
                                                    <span><img src={filter} alt="" className='mx-3' /></span>
                                                    <span><img src={download} alt="" className='ml-2' /></span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12" style={{ height: "70vh", overflow: "scroll" }}>
                                                <table class="table " >
                                                    <thead style={{ fontSize: '12px', backgroundColor: "#d3e6e9" }} >
                                                        <tr>
                                                            <th scope="col" style={{ borderRight: "4px solid #1296B0" }} >Actions</th>
                                                            <th scope="col">Request Number <img src={updown} alt="" /></th>
                                                            <th scope="col">Status <img src={updown} alt="" /></th>
                                                            <th scope="col">Service Type <img src={updown} alt="" /></th>
                                                            <th scope="col">Service Category <img src={updown} alt="" /></th>
                                                            <th scope="col">Description <img src={updown} alt="" /> </th>
                                                            <th scope="col">Location <img src={updown} alt="" /> </th>
                                                            <th scope="col">Assigned <img src={updown} alt="" /> To </th>
                                                            <th scope="col">Created On <img src={updown} alt="" /></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                       {
                                                        pageData.map((entry)=>(
                                                            <tr style={{ fontSize: "12px" }}>
                                                            <td style={{ padding: "0px", borderRight: "4px solid gray" }} >
                                                                <div > {entry.id} <img src='./nsvigate.png' alt="" width={"18xpx"} className='mx-1' /> <img src='./block.png' alt="" width={"18px"} /></div>
                                                            </td>

                                                            <td>{entry.requestNumber}</td>
                                                            {
                                                                entry.status =="completed"? <td><button className='btn btn-sm btn-success'> Closed</button></td> :  <td><button className='btn btn-sm btn-info'> New Implementation</button></td>
                                                            }
                                                           
                                                            
                                                            <td>{entry.serviceType}</td>
                                                            <td>{entry.serviceCategory}</td>
                                                            <td>{entry.description}</td>
                                                            <td>{entry.location}</td>
                                                            <td>{entry.assignedTo}</td>
                                                            <td>{entry.createdOn}</td>
                                                           
                                                           
                                                          
                                                        </tr>
                                                        ))
                                                       }



                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container my-2">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex flex-wrap " style={{ justifyContent: "space-between" }}>
                                                <div>
                                                    <span className='text-secondary' style={{ fontSize: "13px" }} >Total Record Count : <span className='color-1296B0'>{props.data.length}</span></span>
                                                </div>
                                                <div style={{ fontSize: "13px" }}>
                                                    <select style={{ border: "none", color: "gray" }} id="recordperPage" ref={record} onChange={handleRecord}>

                                                        <option value="5"   selected={recordPerPage  == 5 ? true:false } >5</option>
                                                        <option value="10" selected={recordPerPage  == 10 ? true:false } >10</option>
                                                        <option value="15"  selected={recordPerPage  == 15 ? true:false }>15</option>
                                                    </select>
                                                    <span className='text-secondary ml-2'>Record Per Page</span>
                                                    <img src={leftarrow} alt="" style={{cursor:"pointer"}} className={'mx-2 '+ (count <= recordPerPage ? "d-none" : "")} onClick={handleBack} />
                                                    <span className='text-secondary'> {count-(recordPerPage)} - {count}</span>
                                                    <img src={rightarrow} onClick={handleNext} alt="" className={(count >= props.data.length ? "d-none" : "")} style={{cursor:"pointer"}} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Modal  */}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ minWidth: "60vw" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title color-1296B0" style={{ fontSize: "18px" }} id="exampleModalLongTitle">Raise IT Desk Ticket</h5>
                            <button type="button r" className="close " data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ color: "red" }}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-6 my-2">
                                        <div  className='text-left'>Service Type*</div>
                                        <select class="form-control">
                                            <option>Select Serive Type</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 my-2">
                                        <div  className='text-left'>Location*</div>
                                        <select class="form-control">
                                            <option>Select Service Type</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 my-2">
                                        <div  className='text-left'>Priority*</div>
                                        <select class="form-control">
                                            <option>Select Priority</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 my-2">
                                        <div  className='text-left'>Upload File<span>&#40;</span>s<span>&#41;</span> </div>
                                        <input class="form-control" type="text" placeholder="Attach" /> <span style={{position:"relative",top:"-35px",left:"164px"}}><img src={file} alt="" /></span>
                                    </div>
                                    <div className="col-lg-12">
                                    <div className='text-left'>Description*</div>
                                    <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-custom" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Raise IT Desk Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List

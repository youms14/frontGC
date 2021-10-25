import React, { Component } from 'react';
import '../assets/css/RecherchedeCourriel.css';

import { ProgressSpinner } from 'primereact/progressspinner';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class RecherchedeCourriel extends Component {
    constructor(props) {
        super(props);

        /*this.couriels=[
            {
                numCourriel:'000025',
                codeCourriel: 'FICH0005',
                objet: 'Fiche academique',
                status: 'IN PROGRESS',
                dateEnregistrement:'12/10/2020',
                dateRetrait:'20/12/2020',
                Procedure: 'Demande de Fiche academique'
    
            },
            {
                numCourriel:'000026',
                codeCourriel: 'SOUT0003',
                objet: 'Autorisation de soutenance',
                status: 'IN PROGRESS',
                dateEnregistrement:'30/07/2020',
                dateRetrait:'05/11/2020',
                Procedure: 'Autorisation de soutenance'
    
            }
        ]

        /*this.state={
            couriels:[]
        }*/


        this.state = {
            couriels:[],
            customers: null,
            loading: false,
            selectedRepresentative: null,
            selectedDate: null,
            selectedStatus: null,
            globalFilter: null
        };
        /*
        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "XuXue Feng", image: 'xuxuefeng.png'}
        ];*/

        this.statuses = [
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ]

        //this.customerService = new CustomerService();
        this.representativesItemTemplate = this.representativesItemTemplate.bind(this);
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        //this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        //this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        //this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        //this.onRepresentativesChange = this.onRepresentativesChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.filterDate = this.filterDate.bind(this);
    }

    

     componentDidMount() {
         fetch('http://localhost:8080/allcouriel')
         .then(res => res.json())
         .then((data) => {
           this.setState({ couriels: data.data })
         })
        .catch(console.log);

   
     }


    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }
    /*
    onRepresentativesChange(e) {
        this.dt.filter(e.value, 'representative.name', 'in');
        this.setState({ selectedRepresentative: e.value });
    }*/

    onDateChange(e) {
        this.dt.filter(e.value, 'date', 'custom');
        this.setState({ selectedDate: e.value });
    }

    onStatusChange(e) {
        this.dt.filter(e.value, 'status', 'equals');
        this.setState({ selectedStatus: e.value })
    }

    nameBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Code</span>
                {rowData.codeCourriel}
            </React.Fragment>
        );
    }

    /*
    countryBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }*/

    /*
    representativeBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{rowData.representative.name}</span>
            </React.Fragment>
        );
    }*/

    dateBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    statusBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    /*
    activityBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }*/

    representativesItemTemplate(option) {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`showcase/demo/images/avatar/${option.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    statusItemTemplate(option) {
        return (<span className={`customer-badge status-${option}`}>{option}</span>);
    }



    render() {

        const header = (
            <div className="table-header">
                List of Customers
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
                </span>
            </div>
        );

        //const representativeFilter = <MultiSelect value={this.state.selectedRepresentative} options={this.representatives} itemTemplate={this.representativesItemTemplate} onChange={(e) => this.setState({ selectedRepresentative: e.value })} optionLabel="name" optionValue="name" placeholder="All" className="p-column-filter" />;
        const dateFilter = <Calendar value={this.state.selectedDate} onChange={(e) => this.setState({ selectedDate: e.value })} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date"/>;
        const statusFilter = <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={(e) => this.setState({ selectedStatus: e.value })} itemTemplate={this.statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
        console.log(this.state.couriels)

       
        return (
            
            <div className="margingSide datatable-filter-demo">
                    
                <div className="card">
                    <DataTable ref={(el) => this.dt = el} value={this.state.couriels} paginator rows={10}
                        header={header} className="p-datatable-customers"
                        globalFilter={this.state.globalFilter} emptyMessage="Aucun courriel trouvé." loading={this.state.loading}>
                        <Column field="codeCourriel" header="Code" body={this.nameBodyTemplate} filter filterPlaceholder="Search by name" />
                        <Column field="status" header="Code" body={this.nameBodyTemplate} filter filterPlaceholder="Search by code" filterMatchMode="contains" />
                        <Column field="status" header="Date" body={this.dateBodyTemplate} filter filterElement={dateFilter} filterFunction={this.filterDate} />
                        <Column field="status" header="Status" body={this.statusBodyTemplate} filter filterElement={statusFilter}/>
                        
                    </DataTable>
                </div>

            </div>
                            
        );
    }

}

export default RecherchedeCourriel;

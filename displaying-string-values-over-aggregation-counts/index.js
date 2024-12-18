ej.base.enableRipple(false);
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        enableSorting: true,
        dataSource: getPivotData(),
        expandAll: false,
        columns: [],
        values: [{ name: 'Designation' }, { name: 'Mail', caption:'Mail Id' }, { name: 'Location' }],
        rows: [{ name: 'EmployeeName' }],
        showGrandTotals: false,

    },
    aggregateCellInfo: function (args) {
        // Trigers for every value cell and you can get the value cells by its field name.
        if (args.cellSets[0] != null) {
            // Assign its unique string data values here.
            args.value = args.cellSets[0][args.fieldName];
        }
    },            
    width: '60%',
    height: 390,
    gridSettings: { 
        columnWidth: 140,
        headerCellInfo: function(args) {
            // Customize the value header text of the pivot table to remove the aggregation type and remove the word "Total."
            args.node.querySelector('.e-headertext').innerText = args.cell.column.headerText
        }
    }
});
pivotObj.appendTo('#PivotTable');
function getPivotData() {
    var pivotData = [
        {
            "EmployeeName": "KathrynFuller",
            "Designation": "Designer",
            "Mail": "kathryn98@jourrapide.com",
            "Location": "Mexico"
        },
        {
            "EmployeeName": "TamerFuller",
            "Designation": "Manager",
            "Mail": "tamer10@arpy.com",
            "Location": "Canada"
        },
        {
            "EmployeeName": "MartinNancy",
            "Designation": "Project Lead",
            "Mail": "martin58@mail.com",
            "Location": "USA"
        },
        {
            "EmployeeName": "DavolioLeverling",
            "Designation": "Developer",
            "Mail": "davolio31@sample.com",
            "Location": "Austria"
        },
        {
            "EmployeeName": "NancyFuller",
            "Designation": "System Analyst",
            "Mail": "nancy87@arpy.com",
            "Location": "Argentina"
        },
        {
            "EmployeeName": "FullerMargaret",
            "Designation": "CFO",
            "Mail": "fuller23@mail.com",
            "Location": "Sweden"
        },
        {
            "EmployeeName": "LeverlingAndrew",
            "Designation": "CFO",
            "Mail": "leverling49@rpy.com",
            "Location": "Germany"
        },
        {
            "EmployeeName": "PeacockBuchanan",
            "Designation": "ProgramDirectory",
            "Mail": "peacock62@jourrapide.com",
            "Location": "Austria"
        },
        {
            "EmployeeName": "MargaretBuchanan",
            "Designation": "Manager",
            "Mail": "margaret18@rpy.com",
            "Location": "France"
        },
        {
            "EmployeeName": "BuchananLaura",
            "Designation": "Developer",
            "Mail": "buchanan7@sample.com",
            "Location": "UK"
        }
    ];
    return pivotData;
}

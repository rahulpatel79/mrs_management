import DashboardBox from './components/DashboardBox';

function Dashboard() {
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8 ">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#d7d7d1","#009c05"]} />
              <DashboardBox color={["#b5c3ca","#bc3030"]} />
              <DashboardBox color={["#6a1d50","#9d7070"]} />
              <DashboardBox color={["#169172","#12166b78"]} />
               
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box">
              
      </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;

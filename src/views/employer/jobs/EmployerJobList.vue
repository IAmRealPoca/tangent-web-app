<template>
  <div>
      <main class="content">
      <nav
        class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0"
      >
        <div class="container-fluid px-0">
          <div
            class="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div class="d-flex align-items-center">
              <button
                id="sidebar-toggle"
                class="sidebar-toggle me-3 btn btn-icon-only btn-lg btn-circle d-none d-md-inline-block"
              >
                <span class="fas fa-bars"></span>
              </button>
              <form class="navbar-search form-inline" id="navbar-search-main">
                <div class="input-group input-group-merge search-bar">
                  <span class="input-group-text" id="topbar-addon"
                    ><span class="fas fa-search"></span
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    id="topbarInputIconLeft"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="topbar-addon"
                  />
                </div>
              </form>
            </div>
            <ul class="navbar-nav align-items-center">
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-dark me-lg-3 icon-notifications dropdown-toggle"
                  data-unread-notifications="true"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  ><span class="icon icon-sm"
                    ><span class="fas fa-bell bell-shake"></span>
                    <span
                      class="icon-badge rounded-circle unread-notifications"
                    ></span></span
                ></a>
                <div
                  class="dropdown-menu dashboard-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0"
                >
                  <div class="list-group list-group-flush">
                    <a
                      href="#"
                      class="text-center text-primary fw-bold border-bottom border-light py-3"
                      >Notifications</a
                    >
                    <a
                      href="../calendar.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-1.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                            </div>
                            <div class="text-end">
                              <small class="text-danger"
                                >a few moments ago</small
                              >
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            Added you to an event "Project stand-up" tomorrow at
                            12:30 AM.
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../tasks.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-2.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Neil Sims</h4>
                            </div>
                            <div class="text-end">
                              <small class="text-danger">2 hrs ago</small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            You've been assigned a task for "Awesome new
                            project".
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../tasks.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-3.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 m-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Roberta Casas</h4>
                            </div>
                            <div class="text-end"><small>5 hrs ago</small></div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            Tagged you in a document called "First quarter
                            financial plans",
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../single-message.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-4.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Joseph Garth</h4>
                            </div>
                            <div class="text-end"><small>1 d ago</small></div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            New message: "Hey, what's up? All set for the
                            presentation?"
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../single-message.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-5.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Bonnie Green</h4>
                            </div>
                            <div class="text-end"><small>2 hrs ago</small></div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            New message: "We need to improve the UI/UX for the
                            landing page."
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="#"
                      class="dropdown-item text-center text-primary fw-bold rounded-bottom py-3"
                      >View all</a
                    >
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle pt-1 px-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><div class="media d-flex align-items-center">
                    <img
                      class="user-avatar md-avatar rounded-circle"
                      alt="Image placeholder"
                      src="@/assets/img/team/profile-picture-3.jpg"
                    />
                    <div
                      class="media-body ms-2 text-dark align-items-center d-none d-lg-block"
                    >
                      <span class="mb-0 font-small fw-bold">Bonnie Green</span>
                    </div>
                  </div></a
                >
                <div
                  class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-0"
                >
                  <a class="dropdown-item rounded-top fw-bold" href="#"
                    ><span class="far fa-user-circle"></span>My Profile</a
                  >
                  <a class="dropdown-item fw-bold" href="#"
                    ><span class="fas fa-cog"></span>Settings</a
                  >
                  <a class="dropdown-item fw-bold" href="#"
                    ><span class="fas fa-envelope-open-text"></span>Messages</a
                  >
                  <a class="dropdown-item fw-bold" href="#"
                    ><span class="fas fa-user-shield"></span>Support</a
                  >
                  <div role="separator" class="dropdown-divider my-0"></div>
                  <a class="dropdown-item rounded-bottom fw-bold" href="#"
                    ><span class="fas fa-sign-out-alt text-danger"></span
                    >Logout</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="py-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Tables</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              DataTables
            </li>
          </ol>
        </nav>
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <h1 class="h4">DataTables (Vanilla JS)</h1>
            <p class="mb-0">
              Dozens of reusable components built to provide buttons, alerts,
              popovers, and more.
            </p>
          </div>
          <div>
            <a
              href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/plugins/datatables/"
              class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i> DataTables Docs</a
            >
          </div>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive py-4">
          <table class="table table-flush" id="datatable">
            <thead class="thead-light">
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
              <tr>
                <td>Rhona Davidson</td>
                <td>Integration Specialist</td>
                <td>Tokyo</td>
                <td>55</td>
                <td>2010/10/14</td>
                <td>$327,900</td>
              </tr>
              <tr>
                <td>Colleen Hurst</td>
                <td>Javascript Developer</td>
                <td>San Francisco</td>
                <td>39</td>
                <td>2009/09/15</td>
                <td>$205,500</td>
              </tr>
              <tr>
                <td>Sonya Frost</td>
                <td>Software Engineer</td>
                <td>Edinburgh</td>
                <td>23</td>
                <td>2008/12/13</td>
                <td>$103,600</td>
              </tr>
              <tr>
                <td>Jena Gaines</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>30</td>
                <td>2008/12/19</td>
                <td>$90,560</td>
              </tr>
              <tr>
                <td>Quinn Flynn</td>
                <td>Support Lead</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2013/03/03</td>
                <td>$342,000</td>
              </tr>
              <tr>
                <td>Charde Marshall</td>
                <td>Regional Director</td>
                <td>San Francisco</td>
                <td>36</td>
                <td>2008/10/16</td>
                <td>$470,600</td>
              </tr>
              <tr>
                <td>Haley Kennedy</td>
                <td>Senior Marketing Designer</td>
                <td>London</td>
                <td>43</td>
                <td>2012/12/18</td>
                <td>$313,500</td>
              </tr>
              <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>2010/03/17</td>
                <td>$385,750</td>
              </tr>
              <tr>
                <td>Michael Silva</td>
                <td>Marketing Designer</td>
                <td>London</td>
                <td>66</td>
                <td>2012/11/27</td>
                <td>$198,500</td>
              </tr>
              <tr>
                <td>Paul Byrd</td>
                <td>Chief Financial Officer (CFO)</td>
                <td>New York</td>
                <td>64</td>
                <td>2010/06/09</td>
                <td>$725,000</td>
              </tr>
              <tr>
                <td>Gloria Little</td>
                <td>Systems Administrator</td>
                <td>New York</td>
                <td>59</td>
                <td>2009/04/10</td>
                <td>$237,500</td>
              </tr>
              <tr>
                <td>Bradley Greer</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>41</td>
                <td>2012/10/13</td>
                <td>$132,000</td>
              </tr>
              <tr>
                <td>Dai Rios</td>
                <td>Personnel Lead</td>
                <td>Edinburgh</td>
                <td>35</td>
                <td>2012/09/26</td>
                <td>$217,500</td>
              </tr>
              <tr>
                <td>Jenette Caldwell</td>
                <td>Development Lead</td>
                <td>New York</td>
                <td>30</td>
                <td>2011/09/03</td>
                <td>$345,000</td>
              </tr>
              <tr>
                <td>Yuri Berry</td>
                <td>Chief Marketing Officer (CMO)</td>
                <td>New York</td>
                <td>40</td>
                <td>2009/06/25</td>
                <td>$675,000</td>
              </tr>
              <tr>
                <td>Caesar Vance</td>
                <td>Pre-Sales Support</td>
                <td>New York</td>
                <td>21</td>
                <td>2011/12/12</td>
                <td>$106,450</td>
              </tr>
              <tr>
                <td>Doris Wilder</td>
                <td>Sales Assistant</td>
                <td>Sidney</td>
                <td>23</td>
                <td>2010/09/20</td>
                <td>$85,600</td>
              </tr>
              <tr>
                <td>Angelica Ramos</td>
                <td>Chief Executive Officer (CEO)</td>
                <td>London</td>
                <td>47</td>
                <td>2009/10/09</td>
                <td>$1,200,000</td>
              </tr>
              <tr>
                <td>Gavin Joyce</td>
                <td>Developer</td>
                <td>Edinburgh</td>
                <td>42</td>
                <td>2010/12/22</td>
                <td>$92,575</td>
              </tr>
              <tr>
                <td>Jennifer Chang</td>
                <td>Regional Director</td>
                <td>Singapore</td>
                <td>28</td>
                <td>2010/11/14</td>
                <td>$357,650</td>
              </tr>
              <tr>
                <td>Brenden Wagner</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>28</td>
                <td>2011/06/07</td>
                <td>$206,850</td>
              </tr>
              <tr>
                <td>Fiona Green</td>
                <td>Chief Operating Officer (COO)</td>
                <td>San Francisco</td>
                <td>48</td>
                <td>2010/03/11</td>
                <td>$850,000</td>
              </tr>
              <tr>
                <td>Shou Itou</td>
                <td>Regional Marketing</td>
                <td>Tokyo</td>
                <td>20</td>
                <td>2011/08/14</td>
                <td>$163,000</td>
              </tr>
              <tr>
                <td>Michelle House</td>
                <td>Integration Specialist</td>
                <td>Sidney</td>
                <td>37</td>
                <td>2011/06/02</td>
                <td>$95,400</td>
              </tr>
              <tr>
                <td>Suki Burks</td>
                <td>Developer</td>
                <td>London</td>
                <td>53</td>
                <td>2009/10/22</td>
                <td>$114,500</td>
              </tr>
              <tr>
                <td>Prescott Bartlett</td>
                <td>Technical Author</td>
                <td>London</td>
                <td>27</td>
                <td>2011/05/07</td>
                <td>$145,000</td>
              </tr>
              <tr>
                <td>Gavin Cortez</td>
                <td>Team Leader</td>
                <td>San Francisco</td>
                <td>22</td>
                <td>2008/10/26</td>
                <td>$235,500</td>
              </tr>
              <tr>
                <td>Martena Mccray</td>
                <td>Post-Sales support</td>
                <td>Edinburgh</td>
                <td>46</td>
                <td>2011/03/09</td>
                <td>$324,050</td>
              </tr>
              <tr>
                <td>Unity Butler</td>
                <td>Marketing Designer</td>
                <td>San Francisco</td>
                <td>47</td>
                <td>2009/12/09</td>
                <td>$85,675</td>
              </tr>
              <tr>
                <td>Howard Hatfield</td>
                <td>Office Manager</td>
                <td>San Francisco</td>
                <td>51</td>
                <td>2008/12/16</td>
                <td>$164,500</td>
              </tr>
              <tr>
                <td>Hope Fuentes</td>
                <td>Secretary</td>
                <td>San Francisco</td>
                <td>41</td>
                <td>2010/02/12</td>
                <td>$109,850</td>
              </tr>
              <tr>
                <td>Vivian Harrell</td>
                <td>Financial Controller</td>
                <td>San Francisco</td>
                <td>62</td>
                <td>2009/02/14</td>
                <td>$452,500</td>
              </tr>
              <tr>
                <td>Timothy Mooney</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>37</td>
                <td>2008/12/11</td>
                <td>$136,200</td>
              </tr>
              <tr>
                <td>Jackson Bradshaw</td>
                <td>Director</td>
                <td>New York</td>
                <td>65</td>
                <td>2008/09/26</td>
                <td>$645,750</td>
              </tr>
              <tr>
                <td>Olivia Liang</td>
                <td>Support Engineer</td>
                <td>Singapore</td>
                <td>64</td>
                <td>2011/02/03</td>
                <td>$234,500</td>
              </tr>
              <tr>
                <td>Bruno Nash</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>38</td>
                <td>2011/05/03</td>
                <td>$163,500</td>
              </tr>
              <tr>
                <td>Sakura Yamamoto</td>
                <td>Support Engineer</td>
                <td>Tokyo</td>
                <td>37</td>
                <td>2009/08/19</td>
                <td>$139,575</td>
              </tr>
              <tr>
                <td>Thor Walton</td>
                <td>Developer</td>
                <td>New York</td>
                <td>61</td>
                <td>2013/08/11</td>
                <td>$98,540</td>
              </tr>
              <tr>
                <td>Finn Camacho</td>
                <td>Support Engineer</td>
                <td>San Francisco</td>
                <td>47</td>
                <td>2009/07/07</td>
                <td>$87,500</td>
              </tr>
              <tr>
                <td>Serge Baldwin</td>
                <td>Data Coordinator</td>
                <td>Singapore</td>
                <td>64</td>
                <td>2012/04/09</td>
                <td>$138,575</td>
              </tr>
              <tr>
                <td>Zenaida Frank</td>
                <td>Software Engineer</td>
                <td>New York</td>
                <td>63</td>
                <td>2010/01/04</td>
                <td>$125,250</td>
              </tr>
              <tr>
                <td>Zorita Serrano</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>56</td>
                <td>2012/06/01</td>
                <td>$115,000</td>
              </tr>
              <tr>
                <td>Jennifer Acosta</td>
                <td>Junior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>43</td>
                <td>2013/02/01</td>
                <td>$75,650</td>
              </tr>
              <tr>
                <td>Cara Stevens</td>
                <td>Sales Assistant</td>
                <td>New York</td>
                <td>46</td>
                <td>2011/12/06</td>
                <td>$145,600</td>
              </tr>
              <tr>
                <td>Hermione Butler</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>47</td>
                <td>2011/03/21</td>
                <td>$356,250</td>
              </tr>
              <tr>
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
                <td>London</td>
                <td>21</td>
                <td>2009/02/27</td>
                <td>$103,500</td>
              </tr>
              <tr>
                <td>Jonas Alexander</td>
                <td>Developer</td>
                <td>San Francisco</td>
                <td>30</td>
                <td>2010/07/14</td>
                <td>$86,500</td>
              </tr>
              <tr>
                <td>Shad Decker</td>
                <td>Regional Director</td>
                <td>Edinburgh</td>
                <td>51</td>
                <td>2008/11/13</td>
                <td>$183,000</td>
              </tr>
              <tr>
                <td>Michael Bruce</td>
                <td>Javascript Developer</td>
                <td>Singapore</td>
                <td>29</td>
                <td>2011/06/27</td>
                <td>$183,000</td>
              </tr>
              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>
export default {
    name: "EmployerJobList",
}
</script>

<style scoped>

</style>
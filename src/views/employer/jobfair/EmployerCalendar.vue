<template>
  <div>
    <MainContent>
      <div class="py-2">
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <h1 class="h4">Calendar</h1>
            <p class="mb-0">
              Dozens of reusable components built to provide buttons, alerts,
              popovers, and more.
            </p>
          </div>
          <div>
            <a href="#" class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i> Calendar Docs</a
            >
          </div>
        </div>
      </div>
      <div class="card"><div id="calendar" class="p-4"></div></div>

      <div
        class="modal fade"
        id="modal-new-event"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-new-event"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <form id="addNewEventForm" class="modal-content">
            <div class="modal-body">
              <div class="mb-4">
                <label for="eventTitle">Event title</label>
                <input
                  type="text"
                  class="form-control"
                  id="eventTitle"
                  required
                />
              </div>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="mb-4">
                    <label for="dateStart">Select start date</label>
                    <div class="input-group">
                      <span class="input-group-text"
                        ><span class="far fa-calendar-alt"></span
                      ></span>
                      <input
                        data-datepicker=""
                        class="form-control"
                        id="dateStart"
                        type="text"
                        placeholder="dd/mm/yyyy"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="mb-2">
                    <label for="dateEnd">Select end date</label>
                    <div class="input-group">
                      <span class="input-group-text"
                        ><span class="far fa-calendar-alt"></span
                      ></span>
                      <input
                        data-datepicker=""
                        class="form-control"
                        id="dateEnd"
                        type="text"
                        placeholder="dd/mm/yyyy"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-dark" id="addNewEvent">
                Add new event
              </button>
              <button
                type="button"
                class="btn btn-gray-300 ms-auto"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="modal fade"
        id="modal-edit-event"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-edit-event"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <form id="editEventForm" class="modal-content">
            <div class="modal-body">
              <div class="mb-4">
                <label for="eventTitleEdit">Event title</label>
                <input
                  type="text"
                  class="form-control"
                  id="eventTitleEdit"
                  required
                />
              </div>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="">
                    <label for="dateStartEdit">Select start date</label>
                    <div class="input-group">
                      <span class="input-group-text"
                        ><span class="far fa-calendar-alt"></span
                      ></span>
                      <input
                        data-datepicker=""
                        class="form-control"
                        id="dateStartEdit"
                        type="text"
                        placeholder="dd/mm/yyyy"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="mb-2">
                    <label for="dateEndEdit">Select end date</label>
                    <div class="input-group">
                      <span class="input-group-text"
                        ><span class="far fa-calendar-alt"></span
                      ></span>
                      <input
                        data-datepicker=""
                        class="form-control"
                        id="dateEndEdit"
                        type="text"
                        placeholder="dd/mm/yyyy"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-dark me-2" id="editEvent">
                Update event
              </button>
              <button type="submit" class="btn btn-danger" id="deleteEvent">
                Delete event
              </button>
              <button
                type="button"
                class="btn btn-link text-gray ms-auto"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  name: "EmployerCalendar",
  components: {
    MainContent,
  },
};
</script>

<style scoped></style>

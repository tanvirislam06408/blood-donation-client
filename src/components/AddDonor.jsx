"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField,Calendar, DateField, DatePicker} from "@heroui/react";
import { Flame } from "lucide-react";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

const AddDonor = () => {
   const handleSubmit = async(e) => {
          e.preventDefault();
          const bloodReq = new FormData(e.currentTarget);
          const formData = Object.fromEntries(bloodReq.entries());
          
          const res=await fetch(`${process.env.PORT_SERVER}/users`,{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(formData)
          })
          const data=await res.json()
          
          if (data.acknowledged) {
              Swal.fire({
                  title: "Donor Register SuccessFull !",
                  icon: "success",
                  draggable: true
              });
              e.target.reset();
              redirect('/all-donor')
          }
          else{
              Swal.fire({
                  title: "Failed !",
                  icon: "warning",
                  draggable: true
              });
          }
          return data;
      }
    return (
         <Modal>
      <Button variant='outline'>Become a Donor</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md md:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-red-500">
                <Flame />
              </Modal.Icon>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">


                
                <form onSubmit={handleSubmit}  className="bg-white border-red-100 rounded-3xl p-8 space-y-6 shadow-sm">

                
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                       Become a donor
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Fill the details for become a donor
                    </p>
                </div>

                {/* name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Your Name
                    </label>

                    <input
                        name='name'
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name='email'
                            placeholder="you@example.com"
                            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Phone
                        </label>

                        <input
                            name='phone'
                            type="text"
                            placeholder="+1 555 123 4567"
                            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        />
                    </div>

                </div>


                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Your Age
                    </label>

                    <input
                        name='age'
                        type="text"
                        placeholder="your age"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                </div>

                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Blood Group
                    </label>

                    <input
                        name='bloodGroup'
                        type="text"
                        placeholder="Blood group"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Location
                    </label>

                    <input
                        name='location'
                        type="text"
                        placeholder="your current address"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Image Url
                    </label>

                    <input
                        name='image'
                        type="url"
                        placeholder="your image url"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                </div>
                 <div className="space-y-2">
                    <DatePicker className="w-full" name="lastDonation">
      <Label>Last Donation Date</Label>
      <DateField.Group fullWidth>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover>
        <Calendar aria-label="Event date">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({year}) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
                </div>

      <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        write something about yourself
                    </label>

                   <textarea
                        name='description'
                        rows={4}
                        placeholder="write..."
                        className="
                w-full
                mt-3
                rounded-2xl
                border
                border-gray-200
                px-4
                py-3
                outline-none
                transition-all
                resize-none
                focus:border-red-500
                focus:ring-4
                focus:ring-red-100
            "
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-400 py-3 font-semibold text-white transition-all hover:scale-[1.01]"
                >
                    Send Request
                </button>

            </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default AddDonor;
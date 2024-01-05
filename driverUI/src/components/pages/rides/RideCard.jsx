import React from "react";
import { Button } from "primereact/button";
import { Badge } from 'primereact/badge';

export default function RideCard() {
  return (
    <div class="grid md:grid-cols-12 bg-white shadow rounded-lg my-4 ">
      <div className="col-span-3 p-2">
        
        <div class="relative">
        <img
          style={{ width: "270px", height: "160px" }}
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        />
          
          <h3 className="absolute text-2xl text-green-300 bottom-0 right-3">
           <Badge value={"4 weeks"} severity="danger" size="large"/>
          </h3>
        </div>
      </div>
      <div className="col-span-7  flex items-center py-2 ">
        <div>
          <h3 className="text-2xl font-bold ">
            Introduction to Web Development
          </h3>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            blanditiis est dignissimos error neque odio cumque, perspiciatis ad
            minus, assumenda molestias aspernatur, recusandae pariatur?
            Voluptatum impedit sunt culpa nam pariatur consequuntur incidunt
            possimus! Voluptates rem quos voluptatem. Ab adipisci autem
            temporibus. Nemo dolorum minus consequuntur officia consequatur,
            sequi similique veritatis fugit ullam?
          </p>
        </div>
      </div>
      <div className="col-span-2 flex items-center p-4">
        <div className="items-center mx-auto">
          <Button label="Go to Course" className="p-button-danger" size="small" />
        </div>
      </div>
    </div>
  );
}

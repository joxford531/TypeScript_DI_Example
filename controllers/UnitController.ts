import {JsonController, Get, Post, Param, Delete, Body, Req, Res} from "routing-controllers";
import {Request, Response} from "express";
import {UnitService} from "../services/UnitService";
import {Unit} from "../model/Unit";

@JsonController()
export class UnitController {

  constructor(private unitSvc: UnitService) {}

  @Get("/unit/:id")
  async one(@Param("id") id: number, @Req() req: Request, @Res() res: Response) {
    let unit = await this.unitSvc.getUnit(id);
    res.status(200).send(unit);
  }

  @Get("/config")
  config(@Req() req: Request, @Res() res: Response) {
    this.unitSvc.getConfig();
    res.send({hi: "hello"});
  }

  @Post("/unit")
  post(@Body() unit: Unit) {
    return this.unitSvc.createUnit(unit);
  }
}
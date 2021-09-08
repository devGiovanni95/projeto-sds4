package com.devsuperior.dsvendas.controllers;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAllPage(Pageable pageable){
        Page<SaleDTO> list = service.findAllPage(pageable);
        return ResponseEntity.ok(list);
    }

//    @GetMapping
//    public ResponseEntity<List<SaleDTO>> findAll(){
//        List<SaleDTO> list = service.findAll();
//        return ResponseEntity.ok(list);
//    }
}

package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    /*Para deixar salvo dados no cache*/
    @Autowired
    private SellerRepository sellerRepository;

    public List<SaleDTO> findAll(){
        List<Sale> result = repository.findAll();
        return result.stream().map(x -> new SaleDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAllPage(Pageable pageable){
        Page<Sale> result = repository.findAll(pageable);
        return result.map(x -> new SaleDTO(x));
    }
}

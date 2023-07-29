package com.fund.fundingmate.domain.reward.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.sql.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RewardTypeDTO {
    private Long id;
    private Integer rewardAmount;
    private Boolean rewardAvailableLimit;
    private Integer rewardAvailableCount;
    private Date deliveryDate;
    private String rewardTitle;
    private String rewardContent;
    private Boolean rewardShipAddress;
    private List<RewardOptionDTO> rewardOptions;
}
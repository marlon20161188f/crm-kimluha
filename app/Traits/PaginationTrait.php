<?php

namespace App\Traits;

trait PaginationTrait
{
    protected $isPagination;
    protected $sortBy;
    protected $descending;
    protected $limit;
    protected $metaAdditional;

    public function initPagination($sortBy = 'name', $descending = null, $limit = 10)
    {
        $this->isPagination = request()->input('isPagination');

        $this->sortBy = request()->input('sortBy');
        if (is_null($this->sortBy) || $this->sortBy === '') {
            $this->sortBy = $sortBy;
        }

        $_descending = request()->input('descending');
        if (is_null($_descending) || $_descending === '') {
            $_descending = $descending;
        }
//        if (!is_null($descending)) {
//            $_descending = $descending;
//        }
        $this->descending = $_descending ? 'desc' : 'asc';

        $this->limit = request()->input('limit');
        if (is_null($this->limit) || $this->limit === '') {
            $this->limit = $limit;
        }

        $this->metaAdditional = [
            'meta' => [
                'sort_by' => $this->sortBy,
                'descending' => $_descending,
//                'descending1' => $this->descending,
            ]
        ];
    }
}

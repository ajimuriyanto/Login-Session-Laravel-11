<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupModel extends Model
{
    use HasFactory;

    protected $table = 'm_group_user';
    protected $primaryKey = 'id_group';

    protected $fillable = [
        'nm_module'
    ];
}